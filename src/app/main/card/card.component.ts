import { Component, OnInit, Input } from '@angular/core'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Router } from '@angular/router'
import { CharactersService } from '../../characters.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: any
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data.date = format(
      parseISO(this.data.modified),
      "d 'de' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    )
    this.data.avatar = `${this.data.thumbnail.path}.${this.data.thumbnail.extension}`
  }

  redirect(item) {
    this.router.navigate(['/character', item.id], {
      queryParams: {
        data: JSON.stringify({
          id: item.id,
          description: item.description,
          name: item.name,
          avatar: item.avatar,
        }),
      },
    })
  }
}
