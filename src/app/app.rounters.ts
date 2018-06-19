import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutmeComponent} from './components/aboutme/aboutme.component';

const routes : Routes = [
  {path : '', component : HomeComponent},
  {path : 'Contact', component : ContactComponent},
  {path : 'AboutMe', component : AboutmeComponent}
]

export const routing = RouterModule.forRoot(routes);
