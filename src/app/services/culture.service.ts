import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  public DEFAULT_LANGUAGE: string = "en";
  public SECONDARY_LANGUAGE: string = "ar";

  constructor(private translate: TranslateService) { }

  public GetCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  public SetDefaultLanguage(): void {
    this.translate.setDefaultLang(this.DEFAULT_LANGUAGE);
  }

  public SetLanguage(languageCode: string): Observable<any> {
    return this.translate.use(languageCode);
  }

  public ToggleLanguage(): Observable<any> {
    if (this.GetCurrentLanguage() === this.DEFAULT_LANGUAGE) {
      return this.SetLanguage(this.SECONDARY_LANGUAGE);
    }
    else {
      return this.SetLanguage(this.DEFAULT_LANGUAGE);
    }
  }

  public GetTranslatedValue(key: string): string {
    return this.translate.instant(key);
  }

  public GetTranslatedValueSubscription(key: string): Observable<string> {
    const observable = new Observable<string>(subscriber => {
      subscriber.next(this.GetTranslatedValue(key));
      let languageChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        subscriber.next(this.GetTranslatedValue(key));
      });

      this.interceptBefore(subscriber, "unsubscribe", () => {
        languageChangeSubscription.unsubscribe();
        languageChangeSubscription = null;
      })
    });
    return observable;
  }

  private interceptBefore(object, method, fn) {
    let originalMethod = object[method];
    object[method] = function () {
      fn.apply(object);
      originalMethod.apply(object, arguments);
    };
  }
}
