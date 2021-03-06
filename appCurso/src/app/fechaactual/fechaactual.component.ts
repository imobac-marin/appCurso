import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    template: `
        <p>La cotización actual del dólar es de {{ dolareuro | euro }}</p>
    `,
    styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
    dolareuro: Number = 0.88;
}
