import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent {
  @Input() person: Person;
  @Input() questionsList: Question[];
  @Input() isNotFound: boolean;
  @Input() isFound: boolean;

  constructor() {
  }
}
