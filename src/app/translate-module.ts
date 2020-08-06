import { ModuleWithProviders } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService, TranslateCompiler, TranslateParser, MissingTranslationHandler, TranslateFakeLoader, TranslateFakeCompiler, TranslateDefaultParser, FakeMissingTranslationHandler } from '@ngx-translate/core';
import { CultureService } from './services/culture.service';

export function translateServiceFactory(cultureService: CultureService): TranslateService {
  return (<any>cultureService).translate;
}

export class CustomTranslateModule {
  static forChild(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: TranslateModule,
      providers: [
        { provide: TranslateLoader, useClass: TranslateFakeLoader },
        { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
        { provide: TranslateParser, useClass: TranslateDefaultParser },
        { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
        {
          provide: TranslateService, useFactory: translateServiceFactory, deps: [CultureService]
        }
      ]
    };
  }
}
