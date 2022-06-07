Ao aplicar display: flex, todos os items filhos se tornam flex-items e eles passa a respeitar o tamanho do seu conteúdo.
O comportamento padrão de orientação do flex é o horizontal.

#flex-direction
Estabelece o eixo principal do container, definindo a direção que os flex items são colocados no flex container.
	- row(padrão): da esquerda para a direita
	- row-reverse: sentido oposto, da direita para a esquerda
	- column: ordenação de cima para baixo, em coluna única
	- column-reverse: ordenação de baixo para cima, em coluna única

#flex-wrap
Define se os items devem ou não quebrar a linha. Por padrão não quebram, permitindo que os items 'vazem'
	- nowrap: padrão, não permite a quebra de linha
	- wrap: permite quebra de linha assim que um elemento não caiba mais
	- wrap-reverse: permite quebra, assim que um elemento não cabe mais, ele é jogado para cima.

#flex-flow
Atalho para flex-direction e flex-wrap. Não é muito utilizado


#Justify-content
Alinha os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles
OBS: caso os seus itens estejam ocupando 100% de todo o container, ele não se aplica
	- flex-start: início do container
	- flex-end: final do container
	- center: ao centro do container
	- space-between: cria um espaçamento igual entre os elementos. OBS: o elemento inicial fica próximo da esquerda e o final próximo da direita
	- space-around: os espaçamentos do meio são duas vezes maiores que o inicial e o final
	
#Align-items
Alinha os flex itens de acordo com o eixo do container. O alinhamento muda se os itens estão em linhas ou colunas. Permite o alinhamento central no eixo vertical.
	- center: ao centro
	- stretch (padrão): itens crescem igualmente de acordo com o tamanho do maior item
	- flex-start: alinhamento dos itens no início
	- flex-end: alinhamento dos itens no final
	- baseline: alinhamento de acordo com a linha base da tipografia dos itens.

#Align-content
Alinhamento das linhas em relação ao eixo vertical do container
Precisamos que:
 * o container utilize quebra de linhas (wrap)
 * a altura do container seja maior que a soma das linhas dos itens
Tipo de alinhamento:
	- center: alinhamento central
	- stretch: padrão - itens crescem igualmente de acordo com o maior item
	- flex-start: alinhamento no início
	- flex-end: alinhamento no fim
	- space-between: espaçamento igual entre elementos
	- space-around: espaçamentos do meio são duas vezes maiores que o inicial e o final

### Flex-items: ###
#Flex-grow
Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos.
OBS: não funciona caso tenha sido adicionado justify-content ao flex container

#Flex-basis
Estabelece o tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.
	- auto: caso o item não tenha tamanho, este será proporcional ao conteúdo do item
	- px, %, em, ...: valores exatos previamente definidos
	- 0: terá relação com a definição do flex-grow

#Flex-shrink
Estabelece a capacidade de redução ou compressão do tamanho de um item

#Flex
abreviação para grow, shrink e basis

#Order
trabalha com a ordem dos elementos dos items

#Align-self
estabelece alinhamento de modo individual sobre um determinado item. Então o container não pode ter um align-items definido
	- auto: valor padrão, irá respeitar a definição de align-items do container
	- flex-start: início do container
	- flex-end: fim do container
	- center: relativo ao centro de acordo com o eixo (row ou column)
	- stretch: ocupa todo o espaço relativo
	- baseline: linha base da tipografia