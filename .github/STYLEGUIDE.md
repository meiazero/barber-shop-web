# Regras de Estilo barber.shop

Referencias:

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Airbnb](https://github.com/airbnb/javascript/tree/master)

## Sumário:

1. [Regras básicas](#regras-básicas)
2. [Estrutura de componentes](#estrutura-de-componentes)
3. [Criando componentes](#criando-componentes)
4. [Exportando arquivos](#exportando-arquivos)
5. [Custom hooks](#custom-hooks)
6. [Componentes em kebab-case](#componentes-em-kebab-case)
7. [Nomeando coisas](#nomeando-coisas)
8. [Class component](#class-component)
9. [Tipando componentes](#tipando-componentes)
10. [Alt em imagens](#alt-em-imagens)

## Regras básicas

- Um componente por arquivo
- Evite ao máximo o uso de `any` nas tipagens
- Componentes unicamente em TSX
- Código apenas em inglês

## Estrutura de componentes

- Na pasta `components/` adicione o arquivo do componente seguindo o [padrão](#componentes-em-kebab-case) de arquivos, assim:
  - my-component.tsx (seu componente em si)

Caso seu componente precise de um tipo adicione e exporte no arquivo `index.d.ts` em `types/`

```
├─ components/
│	├─ my-component.tsx
```

## Criando componentes

Todos os componentes serão criados em **`funções normais`**, `arrow functions` **apenas** dentro dos componentes

```ts
// Bom
function Component(props: IProps) {
	const handleSomething = () => { /* ... */ }
	return ( /* ... */ )
}

// Ruim
const Component = (props: IProps) => {
	const handleSomething = () => { /* ... */ }
	return ( /* ... */ )
}

// Ruim
const Component = (props: IProps) => {
	function handleSomething() { /* ... */ }
	return ( /* ... */ )
}
```

## Exportando arquivos

Não utilizaremos `export default` nos componentes

```ts
// Bom
export function Component(props: IProps) {
	return ( /* ... */ )
}

// Ruim
function Component(props: IProps) {
	return ( /* ... */ )
}

export default Component

// Ruim
function Component(props: IProps) {
	const handleSomething = () => { /* ... */ }
	return ( /* ... */ )
}
```

## Custom hooks

Se precisar criar um custom hook, use `arrow functions`

```ts
// Bom
export const useHook = () => {
	/* ... */
}

// Ruim
export function useHook() {
	/* ... */
}
```

## Componentes em kebab-case

Iremos seguir o padrão [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case) que consiste em nomear o arquivo em letras minuscular apenas e com hifen entre cada palavra.

```
├─ components
│  ├─ my-component-here.tsx
```

## Nomeando coisas

Tirando componentes e interfaces, iremos utilizar `PascalCase` para nomear tudo.

```ts
// Bom
const HandleSomething = () => {
	/* ... */
}

// Ruim
const handle_something = () => {
	/* ... */
}

// Ruim
const handleSomething = () => {
	/* ... */
}
```

Exceto as props de componentes

```ts
<MyComponent
	isHandsome
	name="hxsggsz"
/>
```

Se a prop é uma string sempre passe entre aspas, única excessão é se você for usar `template string`

```ts
// Bom
<MyComponent
	isHandsome
	name="hxsggsz"
/>

// Ruim
<MyComponent
	isHandsome
	name={"hxsggsz"}
/>
```

Oculte parâmetros que sempre serão `true`

```ts
// Bom
<button isLoading>teste<button>

// Ruim
<button isLoading={true}>teste<button>
```

## Class component

Nosso projeto está sendo feito inteiramente com `programação funcional`, então apenas use `functional components` _(salvo excessões bem excessíveis)_:

```ts
// Bom
function Component(props: IProps) { /* ... */ }

export default Component

// Ruim
class Component extends React.Component {
  // ...
  render() {
    return ( /* ... */ )
  }
}
```

## Tipando componentes

Priorize `Interfaces` no lugar de `Types` , ambos servem para fazer a mesma coisa, mas estamos seguindo o padrão de interfaces

```ts
// Bom
interface IProps {
	/* ... */
}

// Ruim
type IProps = {
	/* ... */
}
```

Use o Prefixo `I` na hora da criação de interfaces.

```ts
// Bom
interface IProps {
	/* ... */
}

// Ruim
interface PropTypes {
	/* ... */
}
```

Use o Prefixo `T` na hora da criação de tipos.

```ts
// Bom
type TProps = {
	/* ... */
}

// Ruim
type PropTypes = {
	/* ... */
}
```

Use o Prefixo `E` na hora da criação de enums.

```ts
// Bom
enum ECoisas = { /* ... */ }

// Ruim
type Coisas = { /* ... */ }
```

## Alt em imagens

SEMPRE coloque o atributo `alt` quando for usar alguma imagem no projeto, é bom por causa do `SEO` e acessibilidade.

```tsx
// Bom
<img src={image} alt="me and my dog" />

// Ruim
<img src={image} />
```

Evite usar o prefixo `image` ou `picture` porque os leitores de tela ja adicionam esse prefixo na hora de ler o `alt` então ficaria duplicado

```tsx
// Ruim
<img src={image} alt="image about me and my dog" />
```