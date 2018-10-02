import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
    defaultSubscriptionType = 'Advanced';
    data = {
        email: '',
        sType: '',
        password: ''
    };

    onSubmit(form: NgForm) {
        this.data.email = form.value.email;
        this.data.sType = form.value.subscription;
        this.data.password = form.value.password;

        form.reset();
    }
}
