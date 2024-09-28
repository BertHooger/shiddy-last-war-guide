import { Section } from "./section";

export interface ShowcaseSection extends Omit<Section, 'component'> {
    isShowcase: true;
}