# 📄 Desafios Opcionais: Funções e Listas

Este repositório armazena as resoluções dos exercícios complementares e desafios não obrigatórios propostos ao longo do curso **Lógica de programação: explore funções e listas** da Alura.

O objetivo destes exercícios é consolidar conceitos fundamentais do desenvolvimento web, focando na manipulação do DOM (Document Object Model), interações dinâmicas através de eventos, funções reutilizáveis com parâmetros e retornos, e lógica algorítmica aplicada em JavaScript.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)** - Construção da lógica comportamental, funções com parâmetros/retornos, laços de repetição (`while`, `for`), operadores lógicos (`||`, `&&`), manipulação do DOM e tratamento de dados (`isNaN`, `parseFloat`, `toFixed`).
* **HTML5** - Estruturação da interface gráfica com IDs únicos para mapeamento de campos de entrada (`input`), botões de ação e parágrafos de exibição.
* **CSS3** - Estilização, espaçamento e organização visual dos blocos de exercícios na página.

---

## 🚀 Exercícios Desenvolvidos

Os desafios foram organizados de forma prática em uma estrutura integrada para facilitar a leitura e execução direta na tela:

* **Bloco 1 - Interagindo com o HTML:** Resolução de exercícios focados em manipulação inicial do DOM (`querySelector`), tratamento de eventos de clique (`onclick`) e exibição de dados dinâmicos com console, `alert` e `prompt`.
* **Bloco 2 - Funções, Parâmetros e Retornos:** Construção de funções utilitárias que recebem parâmetros e retornam valores (saudações personalizadas, dobro de um número, média de três valores, maior número e exponenciação).
* **Bloco 3 - Lógica Algorítmica e Cálculos Práticos:**
  * **Cálculo de IMC:** Captura de peso e altura com validação de dados.
  * **Fatorial:** Cálculo algorítmico utilizando laço de repetição `while` e validação para valores negativos ou inválidos.
  * **Conversão de Dólar para Real:** Conversão de valores com cotação fixa e formatação decimal com `parseFloat` e `toFixed(2)`.
  * **Área e Perímetro do Retângulo:** Captura de múltiplos parâmetros da tela para cálculo geométrico de um retângulo.
  * **Área e Perímetro do Círculo:** Uso de constantes globais/matemáticas (`Math.PI`) aplicadas a cálculos circulares.
  * **Tabuada:** Utilização do laço `for` com o operador de acumulação `+=` e tags de quebra de linha (`<br>`) para exibição formatada.

---

## 📁 Organização Interna do Projeto

Para manter o ambiente limpo, organizado e livre de erros, a aplicação foi estruturada seguindo estas boas práticas:

1. **IDs Únicos no HTML:** Prevenção de conflitos de leitura do DOM através de identificadores exclusivos para cada exercício (ex: `#alturaImcInput` vs `#alturaRetInput`).
2. **Validação de Entradas:** Verificação contínua do tipo de dado digitado pelo usuário com `isNaN()` e bloqueio de entradas inválidas ou menores/iguais a zero.
3. **Escopo e Parâmetros:** Isolamento da lógica através de funções locais e passagem de parâmetros direto na chamada dos eventos no HTML.