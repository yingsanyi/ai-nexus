import { Course, Difficulty } from './types';

export const COURSES: Course[] = [
  {
    id: 'ml-101',
    title: '机器学习基础',
    description: '探索经典算法，从线性回归到决策树，构建你的AI基石。',
    icon: 'BrainCircuit',
    color: 'from-cyan-500 to-blue-600',
    difficulty: Difficulty.Beginner,
    lessons: [
      {
        id: 'ml-00-intro',
        title: '开启 AI 之旅：技能树与路线图',
        description: '了解 AI 学习路线、必备数学基础与编程技能，避开学习路上的“绝望之谷”。',
        content: `
# 第 0 章：开启 AI 之旅：技能树与路线图

欢迎来到人工智能（AI）的世界。在敲下第一行代码之前，我们需要先调整一下“导航仪”，看看我们将要去哪里，背包里需要带什么，以及路上会遇到什么样的风景和挑战。

## 0.1 我们为什么学 AI？

学习 AI 不仅仅是为了追逐热点，更是为了掌握一种全新的**解决问题的范式**。

> [!TIP]
> **Paradigm Shift:** 
> 传统的 Software 1.0 是你告诉电脑“怎么做”；而 Software 2.0 (AI) 是你告诉电脑“想要什么”，让它自己学会怎么做。

- **从 Software 1.0 到 Software 2.0:**
  - **传统编程 (1.0):** 程序员显式地编写规则（If-Else）。比如写一个垃圾邮件过滤器，你需要列出所有可能的敏感词。这很难穷尽。
  - **AI 编程 (2.0):** 程序员不再编写规则，而是**定义目标**并提供**数据**，让算法自己去寻找规则。你只需要给模型看 1 万封垃圾邮件和 1 万封正常邮件，它就能自己学会分辨。

\`\`\`python
# Software 2.0 的伪代码
def train_model(data, labels):
    # 机器自己寻找 pattern
    model = Model()
    for epoch in range(100):
        predictions = model(data)
        error = loss(predictions, labels)
        model.update(error)
    return model
\`\`\`

## 0.2 必备的数学与编程锦囊

不要被“人工智能”这个词吓倒。对于大多数应用者来说，你不需要成为数学家。请检查你的“行囊”里是否具备了以下基础装备：

### 🎒 装备包 A：数学基础 (理论核心)

数学是我们理解模型“为什么生效”以及“为什么失效”的工具。

> [!WARNING]
> 不要试图在一开始就搞懂所有推导！**先看几何意义 (Geometric Intuition)**，再看代码实现，最后才是数学证明。

1. **线性代数 (Linear Algebra) —— 数据的容器**
   - **必须掌握:** 向量、矩阵乘法、维度变换 (Reshape)。
   - **为什么:** 计算机眼中的图片不是图，而是一个巨大的数字矩阵。深度学习的本质就是大规模的矩阵运算。
2. **微积分 (Calculus) —— 优化的引擎**
   - **必须掌握:** 导数、偏导数、链式法则、梯度 (Gradient)。
   - **为什么:** 训练模型的过程就像“下山”，梯度告诉我们往哪个方向走能最快到达山谷（即误差最小点）。
3. **概率统计 (Probability) —— 不确定性的度量**
   - **必须掌握:** 分布 (高斯分布)、期望、贝叶斯定理。
   - **为什么:** 现实世界是充满噪声的，模型输出的永远是一个概率（比如：这是一只猫的概率是 98%）。

\`\`\`quiz
{
  "question": "在深度学习中，为什么我们需要计算梯度 (Gradient)？",
  "options": [
    "为了让数据变得更复杂",
    "为了找到函数下降最快的方向，从而最小化误差",
    "为了增加模型的参数量",
    "为了把矩阵转换成向量"
  ],
  "answer": 1,
  "explanation": "梯度指向函数增长最快的方向，因此它的反方向就是下降最快的方向。在训练中，我们沿着梯度的反方向更新参数，以最小化损失函数 (Loss)。"
}
\`\`\`

### 💻 装备包 B：编程基础 (工程核心)

算法最终要落地为代码。

1. **Python 语言:** AI 领域的通用语。需熟练掌握列表推导式、类 (Class) 与对象、装饰器等中级特性。
2. **科学计算三剑客 (NumPy/Pandas/Matplotlib):**
   - **NumPy:** 所有的 AI 框架底层逻辑都和它相似，它是处理多维数组的标准。
   - **Pandas:** 你的“Excel 杀手”，用于清洗和处理结构化数据。
   - **Matplotlib:** 画出 Loss 曲线，直观地看到模型的训练情况。
3. **Scikit-Learn:** 传统机器学习工具箱。提供现成的算法实现（如决策树、SVM、随机森林），是理解机器学习流程的最佳起点。
4. **深度学习框架 (建议 PyTorch):** 它是目前学术界和工业界最流行的框架，如同乐高积木一样灵活。

------

## 0.3 学习曲线：如何度过“绝望之谷”

学习 AI 并不是一条直线向上的坦途，你将经历著名的**“达克效应” (Dunning-Kruger Effect)** 曲线。提前预知这些阶段，能帮你坚持到底。

### 第一阶段：蜜月期 (The Hand-holding Phase)

- **现象:** 你跟着教程跑通了 Hello World 级别的 Demo（如手写数字识别），代码一运行，准确率 99%。
- **心态:** “AI 也不过如此嘛，简单！”（这就是**愚昧之山**的顶峰）。

### 第二阶段：绝望之谷 (The Valley of Despair) ⚠️ *高危流失区*

- **现象:** 当你试图把自己找来的数据喂给模型时，报错开始了：
  - \`RuntimeError: size mismatch\` (维度不对)
  - \`CUDA out of memory\` (显存炸了)
  - Loss 居高不下，模型什么都学不到。
- **真相:** 你发现自己并没有真正理解代码背后的原理，只会复制粘贴。
- **如何度过:**
  - **不要死磕数学推导:** 遇到不懂的公式，先看几何意义，再看代码实现，最后再看推导。
  - **学会调试:** 善用 \`print(tensor.shape)\`，90% 的 Bug 都是因为矩阵维度对不上。
  - **回归数据:** 检查你的数据是否干净，标签是否正确。

### 第三阶段：开悟之坡 (The Slope of Enlightenment)

- **现象:** 你开始理解为什么 Learning Rate 设大了会震荡，为什么这里需要加一层 Normalization。你能看懂 PyTorch 的官方文档了。
- **行动:** 你开始系统地学习经典网络结构 (ResNet, Transformer)，并尝试复现简单的论文。

### 第四阶段：精通高原 (Plateau of Productivity)

- **现象:** 工具已经不再是阻碍。你拿到一个实际问题，脑海里能迅速构建出适用的模型架构，并知道如何优化它。

------

🎓 总结:

在这个教程中，我们将尽量拉平“绝望之谷”，通过可视化的原理解析和模块化的代码实践，带你平稳地走上“开悟之坡”。
`.trim(),
        visualizerType: 'none'
      },
      {
        id: 'lr-01',
        title: '线性回归 (Linear Regression)',
        description: '理解最基础的预测模型，学习拟合直线与损失函数。',
        content: `
# 线性回归：预测的艺术

线性回归不仅是机器学习中最基础的算法，更是统计学的基石。它的核心思想非常直观：**在杂乱的数据中找到一种简单的线性关系**。

> "所有的模型都是错误的，但有些是有用的。" —— George Box

## 1. 数学模型

假设我们有一组数据点，我们希望用一条直线去拟合它们。在二维平面上，这条直线的公式为：

$$ y = wx + b $$

其中：
- $w$ (Weight) 是**权重**，决定了直线的斜率。它代表了特征的重要性。
- $b$ (Bias) 是**偏置**，决定了直线的截距。它允许直线上下平移。

> [!NOTE]
> 在高维空间中，这条“直线”被称为**超平面 (Hyperplane)**。

## 2. 损失函数 (MSE)

我们怎么知道哪条线是最好的？我们需要一个标准来衡量“好坏”，这就是**损失函数 (Loss Function)**。

对于回归问题，最常用的是**均方误差 (Mean Squared Error, MSE)**：

$$ L = \\frac{1}{n} \\sum_{i=1}^{n} (y_{pred}^{(i)} - y_{true}^{(i)})^2 $$

我们的目标很简单：**找到一组 $w$ 和 $b$，使得 $L$ 最小。**

## 3. 优化：梯度下降 (Gradient Descent)

想象你在漆黑的山顶，想要下山。你看不清路，但你能感觉到脚下的坡度。你会往**最陡峭的下坡方向**迈一步。这就是梯度下降。

$$ w_{new} = w_{old} - \\alpha \\cdot \\frac{\\partial L}{\\partial w} $$

- $\\alpha$ 是**学习率 (Learning Rate)**，决定了你步子迈多大。
- $\\frac{\\partial L}{\\partial w}$ 是**梯度**，指引了下山的方向。

\`\`\`quiz
{
  "question": "如果学习率 (Learning Rate) 设置得太大，会发生什么？",
  "options": [
    "模型训练会非常慢",
    "模型会非常精准",
    "Loss 可能会震荡甚至发散，无法收敛",
    "计算速度会变慢"
  ],
  "answer": 2,
  "explanation": "学习率太大意味着步子迈得太大，可能会直接越过最低点，导致在山谷两侧来回震荡，甚至爬到对面的山上去了（发散）。"
}
\`\`\`

---
**交互练习**：请查看下方的"交互实验室"，尝试调整学习率，观察 Loss 曲线是如何收敛的。
`.trim(),
        visualizerType: 'loss-chart'
      },
      {
        id: 'dt-02',
        title: '决策树 (Decision Trees)',
        description: '像人类思考一样进行分类与决策。',
        content: `
# 决策树：像人类一样思考

决策树 (Decision Tree) 是一种模仿人类决策过程的算法。它将复杂的决策分解为一系列简单的“是/否”问题。

## 1. 结构解析

决策树由三种节点组成：
*   **根节点 (Root Node)**: 包含所有样本，是决策的起点。
*   **内部节点 (Internal Node)**: 表示在一个特征上的测试（例如：“天气是晴天吗？”）。
*   **叶节点 (Leaf Node)**: 代表最终的决策结果或类别。

## 2. 如何分裂？(Splitting)

构建决策树的关键在于：**在每个步骤，选择哪个特征进行分裂？**
我们的目标是让分裂后的子集尽可能“纯净”。

### 关键概念：熵 (Entropy)
熵是衡量系统混乱程度的指标。
- 假如一个盒子里全是红球，**熵低**（有序）。
- 假如盒子里红球蓝球各一半，**熵高**（混乱）。

$$ H(S) = - \\sum p_i \\log_2(p_i) $$

### 信息增益 (Information Gain)
我们选择那个能让**熵下降最多**（即信息增益最大）的特征进行分裂。

$$ IG(S, A) = H(S) - \\sum \\frac{|S_v|}{|S|} H(S_v) $$

## 3. 剪枝 (Pruning)

决策树很容易**过拟合 (Overfitting)**。如果树长得太深，它可能会记住了训练数据中的噪声。
为了防止这种情况，我们需要“剪枝”——去掉那些对预测贡献不大的分支。
`.trim(),
        visualizerType: 'none'
      }
    ]
  },
  {
    id: 'dl-101',
    title: '深度学习入门',
    description: '深入神经网络，学习反向传播与多层感知机。',
    icon: 'Network',
    color: 'from-violet-500 to-purple-600',
    difficulty: Difficulty.Intermediate,
    lessons: [
      {
        id: 'nn-01',
        title: '神经网络架构',
        description: '神经元、层与激活函数的工作原理。',
        content: `
# 神经网络：大脑的数学模拟

人工神经网络 (Artificial Neural Networks, ANN) 是深度学习的核心。它受生物神经元启发，虽然简化了许多生物细节，但却捕捉到了并行处理和学习的精髓。

## 1. 感知机 (Perceptron)

最简单的神经网络单元。它接收输入，加权求和，然后通过激活函数。

$$ output = f(\\sum w_i x_i + b) $$

## 2. 网络结构

现代神经网络通常包含三个部分：

1.  **输入层 (Input Layer)**: 接收原始数据（像素、文本向量等）。
2.  **隐藏层 (Hidden Layers)**: 这是“深度”学习发生的地方。它们提取特征，将数据变换到新的空间。
3.  **输出层 (Output Layer)**: 给出最终预测（概率分布、数值等）。

## 3. 激活函数：非线性的魔法

如果没有激活函数，无论网络叠加多少层，本质上都只是一个线性变换（矩阵乘法的组合还是矩阵乘法）。
**激活函数引入了非线性**，让网络能拟合复杂的曲线。

*   **ReLU**: $f(x) = max(0, x)$。简单高效，目前最常用。
*   **Sigmoid**: $f(x) = \\frac{1}{1+e^{-x}}$。将输出压缩到 (0,1)。
*   **Tanh**: 将输出压缩到 (-1, 1)。

\`\`\`quiz
{
  "question": "为什么我们需要激活函数 (Activation Function)？",
  "options": [
    "为了让计算更快",
    "为了引入非线性，使网络能学习复杂的模式",
    "为了防止过拟合",
    "为了将输出限制在 0 和 1 之间"
  ],
  "answer": 1,
  "explanation": "如果没有激活函数，多层神经网络等价于单层线性网络，无法处理非线性问题（如图像识别、语言理解）。"
}
\`\`\`

---
**交互练习**：在下方的可视化面板中，你可以看到信号是如何在层级之间传递的。尝试调整网络的复杂度和速度。
`.trim(),
        visualizerType: 'neural-net'
      },
      {
        id: 'bp-02',
        title: '反向传播 (Backpropagation)',
        description: '网络是如何"学习"的？链式法则的应用。',
        content: `
# 反向传播：学习的引擎

如果说前向传播是“推理”，那么反向传播 (Backpropagation) 就是“反思”和“学习”。

## 1. 核心流程

1.  **前向传播 (Forward Pass)**: 数据输入网络，经过层层计算，得到预测值 $\\hat{y}$。
2.  **计算损失**: 比较 $\\hat{y}$ 和真实值 $y$，算出误差 $L$。
3.  **反向传播 (Backward Pass)**: 这是一个“归咎”的过程。我们想知道：**每个权重 $w$ 对这个误差 $L$ 贡献了多少？**

## 2. 链式法则 (Chain Rule)

微积分中的链式法则是反向传播的数学基础。

假设 $L = f(y)$, $y = g(x)$, $x = h(w)$。
那么 $L$ 对 $w$ 的导数是：

$$ \\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial y} \\cdot \\frac{\\partial y}{\\partial x} \\cdot \\frac{\\partial x}{\\partial w} $$

## 3. 参数更新

一旦我们要到了梯度 $\\nabla w$，我们就用它来更新参数：

$$ w \\leftarrow w - \\text{learning\\_rate} \\times \\nabla w $$

通过成千上万次的迭代，网络逐渐“学会”了任务。
`.trim(),
        visualizerType: 'loss-chart'
      }
    ]
  },
  {
    id: 'ai-adv',
    title: 'AI 前沿进阶',
    description: '涵盖CV、NLP、大模型与具身智能，探索人工智能的最前沿。',
    icon: 'Bot',
    color: 'from-amber-400 to-orange-600',
    difficulty: Difficulty.Advanced,
    lessons: [
      {
        id: 'cv-01',
        title: '计算机视觉 (CV)',
        description: '从CNN到Vision Transformers，让机器看懂世界。',
        content: `
# 计算机视觉：机器之眼

计算机视觉 (Computer Vision) 致力于让机器“看”见并理解图像与视频。

## 1. 卷积神经网络 (CNN)

CNN 是视觉领域的王者。它的核心在于**卷积 (Convolution)** 和 **池化 (Pooling)**。

- **局部感知**: 卷积核 (Kernel) 就像一个滑动窗口，扫描图像，提取边缘、纹理等局部特征。
- **参数共享**: 同一个卷积核在整张图上使用，大大减少了参数量。
- **层次化特征**: 浅层网络提取边缘，深层网络提取眼睛、轮子等复杂形状。

## 2. Vision Transformers (ViT)

近年来，Transformer 架构跨界来到了视觉领域。
ViT 将图像切割成一系列 16x16 的小块 (Patches)，将它们视为“单词”，利用 Self-Attention 机制捕捉全局联系。

## 应用场景
- **目标检测 (Object Detection)**: 比如 YOLO 系列。
- **语义分割 (Semantic Segmentation)**: 给每个像素打标签。
- **生成对抗网络 (GANs)**: 创造不存在的人脸或艺术画。

---
**交互练习**：下方的可视化展示了**卷积操作 (Convolution)** 的过程。观察 3x3 的卷积核（Kernel）如何在 5x5 的输入图像上滑动，通过点积运算提取特征（Feature Map）。
`.trim(),
        visualizerType: 'cnn-viz'
      },
      {
        id: 'nlp-llm-02',
        title: 'NLP 与 大语言模型 (LLM)',
        description: 'Transformer架构解析与GPT原理。',
        content: `
# NLP 与 LLM：语言的革命

自然语言处理 (NLP) 经历了从规则、统计模型 (RNN/LSTM) 到 Transformer 的革命性跨越。

## 1. Transformer：Attention is All You Need

2017年 Google 提出的 Transformer 架构改变了一切。
它抛弃了循环结构，完全依赖 **Attention (注意力)** 机制。

$$ Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V $$

这也允许了模型进行**大规模并行训练**。

## 2. BERT 与 GPT

- **BERT (Encoder-only)**: 擅长理解。使用“完形填空”的方式预训练。
- **GPT (Decoder-only)**: 擅长生成。使用“预测下一个词”的方式预训练。

## 3. 大语言模型 (LLM)

当模型参数量达到百亿/千亿级别 (Scaling Law)，神奇的**涌现 (Emergence)** 现象发生了：
- **In-Context Learning**: 不需要微调，只看几个例子就能学会新任务。
- **思维链 (Chain of Thought)**: 能进行多步逻辑推理。
`.trim(),
        visualizerType: 'none'
      },
      {
        id: 'embodied-03',
        title: '具身智能 (Embodied AI)',
        description: 'AI大脑 + 物理身体：迈向通用机器人的关键。',
        content: `
# 具身智能：AI 走进物理世界

如果 ChatGPT 是“缸中之脑”，那么具身智能 (Embodied AI) 就是给这个大脑装上身体（传感器和执行器）。

## 1. 核心循环

$$ 感知 \\rightarrow 规划 \\rightarrow 控制 $$

1.  **感知 (Perception)**: 多模态输入（视觉 RGB-D、触觉、听觉、IMU）。
2.  **规划 (Planning)**: 结合 LLM 的世界知识，将高层指令（"去厨房拿个苹果"）分解为子任务。
3.  **控制 (Control)**: 将动作指令转化为关节电机的电压或力矩。

## 2. 挑战：Sim2Real Gap

在仿真器 (Simulator) 里训练机器人既安全又快速（可以快进时间）。
但现实世界充满了摩擦、形变、光照变化等不可预测因素。
如何将仿真中学会的策略迁移到真机，是 **Sim2Real** 的核心难题。

## 3. 端到端 (End-to-End)

传统的机器人控制由多个模块串联。
现在的趋势是训练一个**通用的 Robot Foundation Model**，直接从像素映射到动作 (Pixels to Actions)。
`.trim(),
        visualizerType: 'none'
      }
    ]
  }
];
