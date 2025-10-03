import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';

// Import your pages
import { HomePage } from './pages/home/home.page';
import { NewsPage } from './pages/news/news.page';
import { ReportPage } from './pages/report/report.page';
import { AboutPage } from './pages/about/about.page';
import { GoverningBodiesPage } from './pages/institution/governing-bodies/governing-bodies.page';
import { PresentationPage } from './pages/institution/presentation/presentation.page';
import { RsopPage } from './pages/rsop/rsop.page';
import { ContactPage } from './pages/contact/contact.page';
import { FtacPage } from './pages/ftac/ftac.page';
import { DonationPage } from './pages/donation/donation.page';
import { NurseryPage } from './pages/day-care/nursery/nursery.page';
import { OneTwoYearPage } from './pages/day-care/one-two-year/one-two-year.page';
import { TwoThreeYearPage } from './pages/day-care/two-three-year/two-three-year.page';
import { RedPage } from './pages/nest/red/red.page';
import { YellowPage } from './pages/nest/yellow/yellow.page';
import { GreenPage } from './pages/nest/green/green.page';
import { BluePage } from './pages/nest/blue/blue.page';
import { SecretaryPage } from './pages/timing/secretary/secretary.page';
import { StudentPage } from './pages/timing/student/student.page';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Import standalone components here, NOT in declarations
    App,          // root component
    HomePage,
    NewsPage,
    ReportPage,
    AboutPage,
    GoverningBodiesPage,
    PresentationPage,
    FtacPage,
    RsopPage,
    ContactPage,
    DonationPage,
    NurseryPage,
    OneTwoYearPage,
    TwoThreeYearPage,
    RedPage,
    YellowPage,
    GreenPage,
    BluePage,
    SecretaryPage,
    StudentPage,CarouselModule
  ],
  providers: [],
})
export class AppModule {}
