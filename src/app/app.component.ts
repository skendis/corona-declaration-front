import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corona-declaration-front';

  constructor(public translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    translate.addLangs(['he', 'en']);
    this.changeLanguage('he');
  }

  /**
   * @description change default site language
   */
  changeLanguage(lang: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'he' ? 'rtl' : 'ltr';
    htmlTag.lang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
