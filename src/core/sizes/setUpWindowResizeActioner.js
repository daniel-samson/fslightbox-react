import { removeFromElementClassIfContains } from "../../helpers/elements/removeFromElementClassIfContains";
import { TRANSFORM_TRANSITION_CLASS_NAME } from "../../constants/classes-names";

export function setUpWindowResizeActioner(
    {
        collections: { sourcesOutersTransformers, sourcesStylers },
        core: { windowResizeActioner: self },
        componentsServices: { toolbarButtons: { fullscreen: isFullscreenEnteredState } },
        data,
        elements: { sources, sourcesOuters },
        stageIndexes
    }
) {
    self.runActions = () => {
        // decreasing max source dimensions for better UX
        (innerWidth < 992) ?
            data.maxSourceWidth = innerWidth :
            data.maxSourceWidth = 0.9 * innerWidth;
        data.maxSourceHeight = 0.9 * innerHeight;

        if (screen.height !== innerHeight) {
            isFullscreenEnteredState.set(false);
        }

        for (let i = 0; i < data.sourcesCount; i++) {
            removeFromElementClassIfContains(sourcesOuters[i], TRANSFORM_TRANSITION_CLASS_NAME);

            if (i !== stageIndexes.current) {
                sourcesOutersTransformers[i].negative();
            }

            // if source is Invalid or if lightbox is initialized there are no sourcesStylers
            // so we need to check if it exists
            if (sourcesStylers[i] && sources[i].current) {
                sourcesStylers[i].styleSize();
            }
        }
    };
}
