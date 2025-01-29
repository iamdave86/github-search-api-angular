import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubHeaderComponent {
  @Input() public title: string = '';
}
