import { Component,OnInit} from '@angular/core';

import { ModotemaService } from './modotema.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuAberto = true;

  activeIcon: number = 0;

  activateIcon(iconIndex: number) {
    this.activeIcon = iconIndex;
  }

  icon:string=''
  
    isModoEscuroAtivado: boolean = false;
  
    ngOnInit() {
      
    }
  
    alternarModoTema() {
      this.isModoEscuroAtivado = !this.isModoEscuroAtivado;

      
  
      if (this.isModoEscuroAtivado) {
        document.documentElement.classList.add('modo-escuro');
        document.documentElement.classList.remove('modo-claro');
        
       
      } else {
        document.documentElement.classList.add('modo-claro');
        document.documentElement.classList.remove('modo-escuro');
      }
  
     
    }
  
}
