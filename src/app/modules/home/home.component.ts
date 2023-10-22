import { Component } from '@angular/core';
import { Strings} from '../../shared/strings/strings'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
    homeTitle = Strings.homeTitle;
}
