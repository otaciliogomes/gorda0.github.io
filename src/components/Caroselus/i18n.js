const i18n = {
	pt_BR: {
		previousControlLabel: "Anterior",
		nextControlLabel: "Próximo",
		hintControlLabel: "Abrir painel de atalhos do teclado",
		enterHintLabel: "Selecione o item em foco",
		sideArrowsHintLabel: "Mova uma página para trás (esquerda) e uma página para frente (direita) e move o foco para o primeiro item",
		updownArrowsHintLabel: "Mova para o próximo item (para cima) ou para o item anterior (para baixo).",
		infiniteHintLabel: "Habilita ou desabilita a navegação infinita do carrossel (se disponível).",
		animationHintLabel :"Habilita ou desabilita os efeitos de animação do carrossel (se disponível).",
		hintLabel :"Abra esse painel.",
		hintTitle: "Atalhos do teclado",
		infiniteModeControlLabel: infiniteMode => `${infiniteMode ? "Desabilitar" : "Habilitar"} apresentação infinita`,
		animationControlLabel: animationMode => `${animationMode ? "Desabilitar" : "Habilitar"} animações`,
		atomicPageLabel: (page, pagesLen) => `Página ${page} de ${pagesLen}`,
		atomicItemLabel: (item, itemsLen) => `Item ${item} de ${itemsLen}`,
		atomicInfiniteModeLabel: infiniteMode => `Apresentação infinita ${infiniteMode ? "ativada" : "desativada"}`,
		atomicAnimationModeLabel: animationMode => `Animações ${animationMode ? "ativadas" : "desativadas"}`,
	},
}

export default i18n