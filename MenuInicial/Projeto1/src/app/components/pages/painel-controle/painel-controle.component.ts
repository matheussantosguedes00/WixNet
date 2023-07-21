import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css'],
})
export class PainelControleComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1.1', cols: 1, rows: 1 },
          { title: 'Card 1.2', cols: 1, rows: 1 },
          { title: 'Card 1.3', cols: 1, rows: 1 },
          { title: 'Card 1.4', cols: 1, rows: 1 },
          { title: 'Card 2.1', cols: 3, rows: 1 },
          { title: 'Card 2.2', cols: 1, rows: 1 },
          { title: 'Card 3.1', cols: 4, rows: 3 },
        ];
      }

      return [
        { title: 'Card 1.1', cols: 1, rows: 1 },
        { title: 'Card 1.2', cols: 1, rows: 1 },
        { title: 'Card 1.3', cols: 1, rows: 1 },
        { title: 'Card 1.4', cols: 1, rows: 1 },
        { title: 'Card 2.1', cols: 3, rows: 1 },
        { title: 'Card 2.2', cols: 1, rows: 1 },
        { title: 'Card 3.1', cols: 4, rows: 3 },
      ];
    })
  );
}
