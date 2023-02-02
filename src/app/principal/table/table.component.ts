import { Component } from '@angular/core';
import { Datos } from 'src/app/models/datos';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // ************ //
  listado: Datos[] = [];
  displayedColumns: string[] = ['id', 'title', 'state', 'url', 'created_at', 'updated_at', 'Editar', 'Eliminar'];
  dataSource: any;
  clickedRows = new Set<Datos>();
  search: number = 0;
  // ************ //
  constructor(private userService: UserServicesService) { }
  
  ngOnInit() {
    this.userService.getUsersAll().subscribe({
      next: (UserAll: Datos[]) => {
        this.listado = UserAll,
          this.dataSource = this.listado
      },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
  }

  Filtrar(id: number) {
    this.userService.getUsersAll().subscribe((users: Datos[]) => {
      this.listado = users.filter((user: Datos) => user.id = (id));
    })
  };
}