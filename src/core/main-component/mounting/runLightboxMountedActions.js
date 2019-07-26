import { injectStylesIfNotInDom } from "../../styles/injectStylesIfNotInDom";
import { getScrollbarWidth } from "../../scrollbar/getScrollbarWidth";

export function runLightboxMountedActions(
    {
        core: { lightboxOpeningActions: { runActions: runLightboxOpeningActions } },
        data,
        props: { openOnMount }
    }
) {
    injectStylesIfNotInDom();
    data.scrollbarWidth = getScrollbarWidth();
    if (openOnMount) {
        runLightboxOpeningActions();
    }
}
