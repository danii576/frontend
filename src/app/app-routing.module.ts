import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NewsPage } from './pages/news/news.page';
import { ReportPage } from './pages/report/report.page';
import { AboutPage } from './pages/about/about.page';
import { GoverningBodiesPage } from './pages/institution/governing-bodies/governing-bodies.page';
import { PresentationPage } from './pages/institution/presentation/presentation.page';
import { RsopPage } from './pages/rsop/rsop.page';
import { ContactPage } from './pages/contact/contact.page';
import { DonationPage } from './pages/donation/donation.page';
import {FtacPage} from "./pages/ftac/ftac.page";
import { NurseryPage } from './pages/day-care/nursery/nursery.page';
import { OneTwoYearPage } from './pages/day-care/one-two-year/one-two-year.page';
import { TwoThreeYearPage } from './pages/day-care/two-three-year/two-three-year.page';
import { RedPage } from './pages/nest/red/red.page';
import { YellowPage } from './pages/nest/yellow/yellow.page';
import { GreenPage } from './pages/nest/green/green.page';
import {BluePage} from './pages/nest/blue/blue.page'
import { SecretaryPage } from './pages/timing/secretary/secretary.page';
import { StudentPage } from './pages/timing/student/student.page';

export const routes: Routes = [
  { path: '', component: HomePage },  // simple default route
  {path: 'news', component: NewsPage}, // route for news page
  { path:'report', component: ReportPage },  // route for report page
  { path: 'about', component: AboutPage },  // route for about page
  { path: 'institution/apresentation', component: PresentationPage },
  { path: 'institution/governing-bodies', component: GoverningBodiesPage },
  {path:'ftac', component: FtacPage},
  {path:'rsop', component: RsopPage},
  {path:'contact',component: ContactPage},
  {path:'donation',component: DonationPage}, // route for donation page
  {path:'daycare/nursery',component:NurseryPage},
  {path:'daycare/one-two-year',component:OneTwoYearPage},
  {path:'daycare/two-three-year',component:TwoThreeYearPage},
  {path:'nest/red',component:RedPage},
  {path:'nest/yellow',component:YellowPage},
  {path:'nest/blue',component:BluePage},
  {path:'nest/green',component:GreenPage},
  {path:'timing/secretary',component:SecretaryPage},
  {path:'timing/student',component:StudentPage },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
