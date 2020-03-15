import { Component, OnInit, Input } from '@angular/core'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: any
  constructor() {}

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
}
