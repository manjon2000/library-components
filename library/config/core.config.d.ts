import { ITranslation, TPrefixLanguage } from "../api/translation";
import * as i0 from "@angular/core";
export declare class CoreManjonUI {
    private translationSource;
    translationObserver: import("rxjs").Observable<ITranslation>;
    translation: Record<TPrefixLanguage, ITranslation>;
    getTranslation(locale: TPrefixLanguage | undefined, key: keyof ITranslation): string | string[] | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreManjonUI, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CoreManjonUI>;
}
