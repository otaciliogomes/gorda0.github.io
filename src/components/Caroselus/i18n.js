const i18n = {
    pt_BR: {
        previousControlLabel: 'Anterior',
        nextControlLabel: 'Próximo',
        helpControlLabel: 'Ajuda',
        infiniteModeControlLabel: infiniteMode => `${infiniteMode ? "Desabilitar" : "Habilitar"} apresentação infinita`,
        animationControlLabel: animationMode => `${animationMode ? "Desabilitar" : "Habilitar"} animações`,
        atomicPageLabel: (page, pagesLen) => `Página ${page} de ${pagesLen}`,
        atomicItemLabel: (item, itemsLen) => `Item ${item} de ${itemsLen}`,
        atomicInfiniteModeLabel: infiniteMode => `Apresentação infinita ${infiniteMode ? 'ativada' : 'desativada'}`,
        atomicAnimationModeLabel: animationMode => `Animações ${animationMode ? 'ativadas' : 'desativadas'}`,
    },
}

export default i18n