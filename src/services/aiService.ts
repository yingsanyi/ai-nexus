export const STORAGE_KEY = 'ai_api_key';
export const DEFAULT_MODEL = 'glm-4.7';

const MODEL_NAME = 'glm-4.7';

const DEFAULT_API_KEY = '26200eecfc1c4952903ff95dfd71e784.xpRoLCNVZ4TEMRJx';

let apiKey: string | null = DEFAULT_API_KEY;

export const initAI = () => {
    apiKey = localStorage.getItem(STORAGE_KEY) || DEFAULT_API_KEY;
};

export const getApiKey = () => {
    return apiKey;
};

export const setApiKey = (key: string | null) => {
    if (key) {
        localStorage.setItem(STORAGE_KEY, key);
        apiKey = key;
    } else {
        localStorage.removeItem(STORAGE_KEY);
        apiKey = null;
    }
};

interface StreamChunk {
    text: string;
}

export const sendMessageStream = async (messages: { role: 'system' | 'user' | 'assistant', content: string }[]): Promise<AsyncIterable<StreamChunk>> => {
    if (!apiKey) {
        throw new Error('API Key 未配置');
    }

    const response = await fetch('https://open.bigmodel.cn/api/coding/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: MODEL_NAME,
            messages,
            stream: true,
            max_tokens: 65536,
            temperature: 1.0
        })
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`AI Service Error: ${err}`);
    }

    if (!response.body) {
        throw new Error('No response body');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    return {
        [Symbol.asyncIterator]: async function* () {
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                buffer += chunk;

                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (line.trim().startsWith('data: ')) {
                        const dataStr = line.trim().slice(6);
                        if (dataStr === '[DONE]') continue;

                        try {
                            const data = JSON.parse(dataStr);
                            if (data.choices && data.choices[0].delta && data.choices[0].delta.content) {
                                yield { text: data.choices[0].delta.content };
                            }
                        } catch (e) {
                            console.warn('Failed to parse SSE message', e);
                        }
                    }
                }
            }
        }
    };
};
