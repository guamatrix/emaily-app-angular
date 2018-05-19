import { Subject } from 'rxjs';

export class SurveysService {
  showReview = new Subject<boolean>();
  private toggle = false;

  toggleReview() {
    this.toggle = !this.toggle;
    this.showReview.next(this.toggle);
  }
}
