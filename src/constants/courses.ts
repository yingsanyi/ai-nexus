import { Course, Difficulty } from '../types';

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
        id: 'ml-01-env',
        title: '工欲善其事：全景式认识 AI 开发环境',
        description: 'Anaconda, Jupyter, Scikit-Learn... 构建清晰的工具地图，为机器学习做好准备。',
        content: `
# 第 1 章：工欲善其事：全景式认识 AI 开发环境

在上一章我们了解了心法（数学）和招式（编程），现在我们要走进“兵器库”。

对于初学者来说，环境配置往往是第一只拦路虎。Anaconda, Miniconda, Scikit-Learn, PyTorch... 这些名词到底是什么关系？我需要全部安装吗？

本章不涉及具体的安装命令，而是要为你构建一张**清晰的工具地图**。弄懂了这张图，后续的配置将易如反掌。

## 1.1 算力基石：CPU vs. GPU

虽然在传统的机器学习（Machine Learning, ML）阶段，普通电脑的 CPU 通常足够应付，但了解算力区别对未来进阶至关重要。

* **CPU (中央处理器):**
  * **角色:** **“老教授”**。核心少，但擅长复杂的逻辑控制。
  * **现状:** 在学习 **Scikit-Learn** 等传统机器学习算法时，CPU 是主力，处理表格数据绰绰有余。

* **GPU (图形处理器):**
  * **角色:** **“千人计算团”**。核心多，擅长并发计算。
  * **现状:** 到了 **深度学习** 阶段（处理图像、大模型），才必须用到 GPU 加速。

---

## 1.2 软件管家：Python, Anaconda 与 Miniconda

很多新手最困惑的问题是：*“我已经装了 Python，为什么还要装 Conda？Anaconda 和 Miniconda 又选哪个？”*

这就涉及到了**依赖管理**的问题。

* **原生 Python:** 就像一个**裸露的发动机**。你可以直接往上装各种配件（库），但很容易产生冲突。
* **Conda (Anaconda/Miniconda):** 就像一个**专业的 4S 店**。它的核心功能是 **虚拟环境 (Virtual Environment)**，允许你创建多个相互隔离的空间，防止不同项目的环境打架。

### ❓ 选择困难症：Anaconda vs. Miniconda

| 特性 | **Anaconda** (巨无霸) | **Miniconda** (精简版) |
| --- | --- | --- |
| **安装包大小** | 很大 (500MB+) | 很小 (50MB左右) |
| **预装库** | 预装了 NumPy, Pandas 等 1500+ 个科学计算包 | 只有 Python 和 Conda 基础管理器 |
| **比喻** | **精装修豪宅**：拎包入住，家具齐全，但有很多你永远不用的东西占地方。 | **毛坯房**：只给你四面墙，你需要什么家具（库）自己买（安装），完全定制化。 |
| **推荐人群** | **初学者** (硬盘空间充足，不想折腾安装包) | **进阶用户** (想要清爽环境，或者服务器部署) |

> **✅ 教程建议:** 为了减少“缺包”带来的报错，本教程初期推荐使用 **Anaconda**；如果你对电脑洁癖较重，**Miniconda** 也是极好的选择。

---

## 1.3 作战平台：Jupyter Notebook (实验室)

代码写在哪里？这取决于你的开发阶段。

* **Jupyter Notebook:**
  * **形态:** 网页版的交互式笔记本。
  * **特点:** 代码分块执行，**所见即所得**。运行一段代码，立刻就能在下方看到数据图表。
  * **地位:** 数据分析与机器学习入门的**绝对首选**。

* **IDE (PyCharm / VS Code):**
  * **地位:** 适合工程化部署。初学阶段如果觉得设置太复杂，可暂时略过。

---

## 1.4 核心武器库：Scikit-Learn (本阶段重点)

在机器学习阶段，我们暂时不需要动用“重型火炮”，一把瑞士军刀足矣。

### 1. 主力武器：Scikit-Learn (sklearn)

这是 Python 生态中最著名、最系统的**传统机器学习库**。

* **地位:** 就像是 AI 界的“标准教科书”。
* **能做什么:** 它封装了几乎所有经典的机器学习算法。
  * **分类:** 识别邮件是垃圾邮件还是正常邮件 (SVM, 决策树)。
  * **回归:** 预测房价走势 (线性回归, 随机森林)。
  * **聚类:** 将用户按消费习惯分组 (K-Means)。
  * **预处理:** 数据的归一化、降维 (PCA)。

* **为什么先学它:** 它的 API 设计极其统一且优雅（所有算法都是 \`.fit()\` 训练，\`.predict()\` 预测），是你理解机器学习流程的最佳入口。

### 2. 重型火炮：PyTorch / TensorFlow (深度学习)

* **地位:** 也就是大家常说的“AI 框架”。
* **能做什么:** 搭建神经网络，处理图像、自然语言等非结构化数据。
* **本阶段策略:** 在掌握了 Scikit-Learn 的基本概念后，我们会在后续的进阶章节再引入它们。

---

## 1.5 “云端”借力：算力平台推荐

如果你不想在本地配置环境，或者电脑配置较低，可以使用云端算力平台。

### 1. [AutoDL](https://www.autodl.com/) (国内首选)

* **特点:** 专为 AI 开发者设计的算力租赁平台。
* **优势:** 服务器在国内，**网速快，无需特殊网络环境**。环境镜像丰富（一键加载配置好的 PyTorch/TensorFlow 镜像）。
* **价格:** 性价比极高，适合学生党和个人开发者（按小时计费，用完即停）。

### 2. [Google Colab](https://colab.research.google.com/) (谷歌全家桶)

* **特点:** 谷歌提供的免费 Jupyter Notebook 环境。
* **优势:** 直接赠送免费的 GPU（甚至 TPU）算力，与 Google Drive 无缝打通。
* **注意:** 需要具备科学上网环境，且免费版有使用时长限制（容易断连）。

### 3. [Kaggle Kernels](https://www.kaggle.com/code) (数据竞赛社区)

* **特点:** 全球最大的数据科学社区提供的在线环境。
* **优势:** 平台上有海量的公开数据集，无需下载即可直接挂载到代码中跑，非常适合练手。
* **注意:** 同样需要一定的网络环境支持。

---

## 本章小结：你的入门装备

通过本章，我们确定了第一阶段的学习装备：

* **开发环境:** Anaconda (或 Miniconda)
* **编程工具:** Jupyter Notebook
* **核心算法库:** **Scikit-Learn** (重点攻克对象)
* **数据处理:** NumPy & Pandas (必不可少的助手)

---
`.trim(),
        visualizerType: 'none'
      },
      {
        id: 'ml-02-devtools',
        title: '现代工坊：VS Code + Jupyter',
        description: '掌握现代 AI 开发者的标准工作流：VS Code、Jupyter、Anaconda 三位一体。',
        content: `
# 第 2 章：现代工坊：VS Code + Jupyter 的数据炼金术

在上一章我们认识了工具，现在我们要把它们组装起来。

虽然 Jupyter 原生界面是网页版的，但在实际工作中，我们更推荐使用 **VS Code** 来运行 Jupyter Notebook。它就像是给你的实验台装上了“机械臂”和“透视镜”，效率翻倍。

## 2.1 核心概念：三位一体

在使用 VS Code 写 AI 代码前，你必须理解这三个角色的关系，否则你会经常遇到“找不到模块”的报错。

1. **VS Code:** 你的**操控台**（界面、编辑器）。
2. **Jupyter:** 你的**实验记录本**（文件格式 \`.ipynb\`）。
3. **Anaconda (Conda):** 你的**发动机**（Python 环境）。

**⚠️ 新手第一坑：选择内核 (Select Kernel)**
VS Code 只是一个壳，它需要你告诉它：“用哪个发动机来跑代码？”。

* **操作:** 在 VS Code 打开 \`.ipynb\` 文件后，**右上角**会有一个 \`Select Kernel\` (或者显示 \`Python 3.x.x\`) 的按钮。
* **关键点:** 点击它，必须选择你通过 **Anaconda** 创建的那个环境（例如 \`base\` 或你自定义的 \`ai_env\`）。只有选对了内核，你 \`import pandas\` 才不会报错。

---

## 2.2 VS Code 里的“超能力”

相比于网页版 Jupyter，VS Code 提供了几个极其强大的独家功能，请务必在接下来的练习中尝试：

### 🔍 1. 变量查看器 (Data Viewer) —— 也就是“上帝视角”

在网页版里，你想看数据长什么样，得用 \`print(df)\`。
但在 VS Code 里：

1. 运行产生变量的代码。
2. 点击顶部工具栏的 **"Variables"** 按钮。
3. 你会看到一个列表。点击 DataFrame 旁边的图标，VS Code 会弹出一个**像 Excel 一样的交互式表格**。你可以直接在里面筛选、排序，查看每一行数据，而不需要写一行代码！

### 🧠 2. 智能补全 (IntelliSense)

当你输入 \`pd.re\` 时，VS Code 会自动弹窗提示 \`read_csv\`, \`read_excel\` 等，并显示参数文档。这比在网页里狂按 \`Tab\` 键要流畅得多。

---

## 2.3 实战任务：波士顿房价分析 (VS Code 版)

> **🎯 任务目标:**
> 在 VS Code 中创建一个新的 Notebook，分析房屋面积、房间数与价格的关系，并生成训练数据。

请在 VS Code 中新建一个文件 \`house_price.ipynb\`，按照以下步骤操作。

### 第一步：Pandas —— 数据的“Excel 杀手”

\`\`\`python
# Cell 1
import pandas as pd

# 伪造一份数据
data = {
    '房间数': [1, 2, 3, 4, 5, 2, 6, 8],
    '面积': [30, 50, 80, 100, 120, 55, 150, 200],
    '价格': [100, 160, 250, 320, 380, 170, 480, 650]
}

df = pd.DataFrame(data)

# 运行这一格 (Shift + Enter)
# 👉 交互动作：现在，请点击 VS Code 顶部的 'Variables' 按钮，
# 在弹出的列表中找到 'df'，点击它左侧的小图标。
# 你看到了什么？是不是一个漂亮的表格？
\`\`\`

### 第二步：Matplotlib —— 嵌入式画图

在 VS Code 中，图表会直接渲染在代码单元格下方，并且支持缩放和保存。

\`\`\`python
# Cell 2
import matplotlib.pyplot as plt

# 设置中文字体（避免乱码的常规操作，视系统而定，这里先用英文演示）
plt.figure(figsize=(8, 5))

# 绘制：横轴是面积，纵轴是价格
plt.scatter(x=df['面积'], y=df['价格'], color='#FF5733') # 支持 Hex 颜色代码

plt.title("House Price Analysis")
plt.xlabel("Area (sqm)")
plt.ylabel("Price (10k)")
plt.grid(True, linestyle='--')

plt.show()
\`\`\`

### 第三步：NumPy —— 矩阵化 (关键)

机器学习模型不吃 Excel 表格，只吃矩阵。这一步是将“人类读得懂的数据”转化为“机器读得懂的数据”。

\`\`\`python
# Cell 3
import numpy as np

# .values 是 Pandas 到 NumPy 的桥梁
# X (特征): 我们用 '房间数' 和 '面积' 来预测
X = df[['房间数', '面积']].values 
# y (标签): 我们要预测的目标是 '价格'
y = df['价格'].values

print(f"X Shape: {X.shape}") # 应该是 (8, 2)
print(f"y Shape: {y.shape}") # 应该是 (8,)

# 👉 交互动作：再次查看 Variables 视图
# 观察 X 和 df 的区别。df 是带有表头的，而 X 只是纯粹的数字矩阵。
\`\`\`

---

## 2.4 必须掌握的 VS Code 快捷键

在 VS Code 中写 Notebook，效率来源于键盘：

1. **运行当前格:** \`Shift + Enter\` (最常用)
2. **仅运行当前格不跳转:** \`Ctrl + Alt + Enter\` (调试时很有用)
3. **在上方插入格:** \`A\` (需在命令模式，即光标不在代码框内时)
4. **在下方插入格:** \`B\`
5. **命令面板:** \`F1\` 或 \`Ctrl/Cmd + Shift + P\`。如果在 Jupyter 里迷路了，或者内核连不上，按这个搜 "Reload Window" 通常能解决 90% 的问题。

---

## 2.5 总结：数据流水线

恭喜！你已经掌握了现代 AI 工程师的标准工作流：

1. **环境:** 用 **Anaconda** 管理包。
2. **工具:** 用 **VS Code** 编写和调试代码。
3. **数据:** 用 **Pandas** 读取，用 **Variables View** 检查。
4. **转化:** 用 **NumPy** 将数据转化为矩阵，准备喂给模型。
`.trim(),
        visualizerType: 'none'
      },
      {
        id: 'ml-03-numpy',
        title: '数学引擎：NumPy 的矩阵思维与高维魔法',
        description: '从 ndarray 到广播机制，深入理解 AI 的数据基石。',
        content: `
# 第 3 章：数学引擎：NumPy 的矩阵思维与高维魔法

在 Python 的世界里，原生列表（List）虽然灵活，但太慢了。对于深度学习动辄百万级的参数运算，我们需要一辆“F1 赛车”。

**NumPy (Numerical Python)** 就是这辆赛车。它是几乎所有现代 AI 框架（TensorFlow, PyTorch, Scikit-learn）的**底层依赖**。如果你看不懂 NumPy，你甚至无法读懂 AI 模型的报错信息。

本章我们将深入 NumPy 的核心，从最基本的数组结构，一直讲到它是如何支撑神经网络运算的。

---

## 3.1 为什么我们需要 NumPy？(从浅入深)

### 3.1.1 速度的差异

先来看一个直观的例子。假设我们要计算两个包含 100 万个数字的列表相加。

* **Python 列表 (for 循环):** CPU 需要在循环中一次次地取数、判断类型、相加。这叫“单兵作战”。
* **NumPy 数组 (向量化):** 它调用底层的 C 语言代码，利用 CPU 的 SIMD 指令集，一声令下，百万数据同时相加。这叫“集团军作战”。

### 3.1.2 核心数据结构：\`ndarray\`

NumPy 的核心只有一样东西：**N-dimensional Array (N 维数组)**。
它和 Python List 最大的区别在于：

1. **内存连续:** 它在内存里是一块连续的空间（像一排紧挨着的储物柜）。
2. **类型固定:** 里面的元素必须是同一种类型（比如全是整数，或者全是浮点数）。

---

## 3.2 维度 (Dimensions)：AI 工程师的空间想象力

这是初学者最容易晕、也最必须掌握的概念。AI 模型处理的数据，本质上就是不同维度的数组。

请在 VS Code 中运行以下代码，建立空间感：

### 3.2.1 0D 到 3D 的进化

\`\`\`python
import numpy as np

# Level 0: 标量 (Scalar) - 一个点
# 场景：Loss 值，准确率
d0 = np.array(10)
print(f"0D Shape: {d0.shape}, 维度: {d0.ndim}") 

# Level 1: 向量 (Vector) - 一条线
# 场景：音频波形，一个人的特征（身高, 体重, 年龄）
d1 = np.array([1, 2, 3])
print(f"1D Shape: {d1.shape}, 维度: {d1.ndim}") 

# Level 2: 矩阵 (Matrix) - 一个面 (Excel表)
# 场景：灰度图片 (高x宽)，一堆人的特征表
d2 = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
print(f"2D Shape: {d2.shape}, 维度: {d2.ndim}") 
# 输出 (2, 3) -> 代表 2 行 3 列

# Level 3: 张量 (Tensor) - 一个体 (立方体)
# 场景：彩色图片 (高x宽x3通道)，视频流
d3 = np.array([
    [[1, 2], [3, 4]], 
    [[5, 6], [7, 8]]
])
print(f"3D Shape: {d3.shape}, 维度: {d3.ndim}")

\`\`\`

> **🧠 记忆口诀:** 看最左边有几个中括号 \`[\`，就是几维数组。

---

## 3.3 创建数组：不仅仅是手写

在实际 AI 任务中，我们很少手写数字，通常是用“生成器”。

### 3.3.1 特殊数组生成

\`\`\`python
# 1. 全 0 矩阵
# 场景：初始化一个空的画布，或者全黑的图片
zeros = np.zeros((3, 4)) # 生成 3行4列 的全0矩阵

# 2. 全 1 矩阵
# 场景：初始化掩码 (Mask)
ones = np.ones((2, 2))

# 3. 序列生成 (arange)
# 替代 Python 的 range()
sequence = np.arange(0, 10, 2) # [0, 2, 4, 6, 8]

\`\`\`

### 3.3.2 随机数生成 (AI 的起点)

这一点至关重要。**神经网络的权重 (Weights) 在训练开始前，必须随机初始化。**

\`\`\`python
# 1. 标准正态分布 (Standard Normal Distribution)
# 生成均值为0，方差为1的随机数
# 场景：最常用的参数初始化方法
weights = np.random.randn(3, 3) 

# 2. 随机整数
# 场景：从数据集中随机抽取样本（抽奖）
indices = np.random.randint(0, 100, size=5)

\`\`\`

---

## 3.4 变形记：Reshape 的艺术

数据往往不是你要的样子。比如你读取了一张图片，它是一个 \`28x28\` 的矩阵，但你的模型输入层需要一个 \`784\` 长度的向量。

这就需要用到 \`reshape\`。

\`\`\`python
# 创建一个包含 12 个元素的数组
arr = np.arange(12) # [0, 1, ... 11]

# 动作 1: 变成 3行4列
mat = arr.reshape(3, 4)

# 动作 2: 展平 (Flatten)
# 把多维数组拍扁成一维，这在卷积神经网络 (CNN) 到 全连接层 的过渡中必用
flat = mat.reshape(-1)

# 🔥 核心技巧: -1 (自动推导)
# 场景：我有 12 个数据，我想分成 2 列，但我懒得算有几行
auto_mat = arr.reshape(-1, 2) 
# NumPy 会自动算出：12 / 2 = 6 行，所以结果是 (6, 2)

\`\`\`

---

## 3.5 索引与切片：精准手术

想要修改或提取数据，必须精通切片。NumPy 的切片比 Python List 强在它支持**多维切片**。

\`\`\`python
data = np.array([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
])

# 任务 1: 取出中间的元素 (50)
print(data[1, 1]) # [行, 列] -> 这里的逗号是 NumPy 独有的语法

# 任务 2: 取出前两行的后两列
# [行切片, 列切片]
# 0:2 代表行取索引 0 和 1
# 1:  代表列取索引 1 到最后
subset = data[0:2, 1:] 
# 结果: [[20, 30], [50, 60]]

# 任务 3: 布尔索引 (Boolean Indexing) - 极其常用！
# 场景：把图片中像素值大于 50 的点（亮斑）过滤出来
mask = data > 50
print(mask) # 这是一个全是 True/False 的矩阵
print(data[mask]) # 直接取出所有 >50 的数字: [60, 70, 80, 90]

\`\`\`

---

## 3.6 核心魔法：广播 (Broadcasting)

这是 NumPy 最“智能”的地方，也是新手最容易出错的地方。

**规则:** 如果两个数组形状不同，NumPy 会尝试自动把小的数组“复制”成大数组的形状，以便进行运算。

### 例子：给全班同学加分

\`\`\`python
scores = np.array([
    [80, 90, 85], # 学生 A 的 语数英
    [70, 75, 80]  # 学生 B 的 语数英
]) # Shape: (2, 3)

bonus = np.array([10, 5, 0]) # Shape: (3,) -> 语文加10分，数学加5分，英语不加

# 直接相加！
final_scores = scores + bonus

# 发生了什么？
# NumPy 发现 bonus 只有 1 行，但 scores 有 2 行。
# 它自动把 bonus 复制了一份，变成了:
# [[10, 5, 0],
#  [10, 5, 0]]
# 然后和 scores 对应位置相加。

\`\`\`

> **⚠️ 避坑:** 广播要求尾部维度必须对齐。比如 (2, 3) 和 (3,) 可以运算，但 (2, 3) 和 (2,) 就会报错！

---

## 3.7 矩阵运算：点积 (Dot Product)

这是深度学习的灵魂。神经网络的前向传播，本质上就是 。

* \`*\` : 对应位置相乘 (Element-wise)。
* \`@\` 或 \`np.dot\` : **矩阵乘法 (Matrix Multiplication)**。

\`\`\`python
a = np.array([[1, 2], [3, 4]])
b = np.array([[1, 0], [0, 1]])

# 对应位置相乘
print(a * b) 
# [[1, 0], [0, 4]]

# 矩阵乘法 (线性代数法则)
# 行乘列，求和
print(a @ b) 
# [[1, 2], [3, 4]]

\`\`\`

---

## 本章作业

打开你的 VS Code，完成以下挑战：

1. 创建一个  的随机矩阵（数值在 0-1 之间）。
2. 将所有大于 0.5 的数值替换为 1，小于等于 0.5 的替换为 0（**提示：** 使用布尔索引）。
3. 这其实就是神经网络中 **Dropout** 或 **激活函数** 的雏形！
`.trim(),
        visualizerType: 'none'
      },
      {
        id: 'ml-04-pandas',
        title: '数据工坊：Pandas 的表格艺术',
        description: '从 Series 到 DataFrame，掌握数据清洗、筛选与透视的核心技能。',
        content: `
# 第 4 章：数据工坊：Pandas 的表格艺术

如果说 NumPy 是数学家的算盘，那么 **Pandas** 就是数据分析师的瑞士军刀。

在现实世界中，我们遇到的数据很少是完美的纯数字矩阵。它们往往是杂乱的 Excel 表格、CSV 文件，包含了时间、文本、缺失值等各种混合类型。Pandas 专为处理这种**结构化数据 (Tabular Data)** 而生。

本章我们将学习如何像外科医生一样精准地操作表格数据。

## 4.1 核心数据结构：Series 与 DataFrame

Pandas 的世界由两个主角构成：

### 1. Series (一维)
它就像 Excel 表格中的**一列**。
*   **组成:** 数据值 (Values) + 索引 (Index)。
*   **特点:** 索引不一定是数字，可以是任何标签（比如股票代码、日期）。

### 2. DataFrame (二维)
它就是**整个 Excel 表格**。
*   **组成:** 多个 Series 拼在一起。
*   **特点:** 有行索引 (Index) 和列名 (Columns)。

## 4.2 数据的“CRUD”

*   **Create (创建/读取):** \`pd.read_csv()\`, \`pd.read_excel()\`
*   **Read (查看):** \`.head()\` (看前几行), \`.info()\` (看类型和内存), \`.describe()\` (看统计摘要)
*   **Update (修改):** 赋值操作
*   **Delete (删除):** \`.drop()\`

## 4.3 数据的“手术刀”：索引与切片

Pandas 提供了两种强大的索引方式，这是新手最容易混淆的地方：

*   **\`loc\` (Label-based):** 看标签。
    *   \`df.loc['2023-01-01', '温度']\` -> 找索引为 '2023-01-01' 那行的 '温度' 列。
*   **\`iloc\` (Integer-based):** 看位置 (0, 1, 2...)。
    *   \`df.iloc[0, 1]\` -> 找第 0 行，第 1 列。

> **⚠️ 避坑:** \`loc\` 切片 **包含** 末尾 (Inclusive)，而 \`iloc\` **不包含** 末尾 (Exclusive，像 Python 列表一样)。

## 4.4 数据的“维修站”：处理缺失值

真实数据往往是“脏”的，充满了 \`NaN\` (Not a Number)。
模型遇到 \`NaN\` 会直接报错。我们通常有两种策略：

1.  **直接丢弃:** \`df.dropna()\` -> 只要有空值就整行删除（适合数据量大且缺失少的情况）。
2.  **填充修补:** \`df.fillna()\` -> 用平均值、中位数或 0 去填补空缺。

## 4.5 数据的“透视表”：GroupBy

这是 Pandas 最强大的功能之一，对应 SQL 中的 \`GROUP BY\`。
它遵循 **Split-Apply-Combine** (拆分-应用-合并) 的逻辑：

1.  **Split:** 按某个标准（比如“班级”）把数据拆开。
2.  **Apply:** 对每组数据应用函数（比如求“平均分”）。
3.  **Combine:** 把结果合并成一张新表。

\`\`\`python
# 算出每个城市的平均温度
df.groupby('城市')['温度'].mean()
\`\`\`
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
