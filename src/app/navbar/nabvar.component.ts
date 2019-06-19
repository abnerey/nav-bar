import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
    isVisible = false;
    navItems = [
        {
            icon: 'home',
            route: 'home',
            selected: true
        },
        {
            icon: 'settings',
            navItems: [
                {
                    title: 'Portal Clientes',
                    icon: 'people_outline',
                    route: 'client'
                },
                {
                    title: 'Portal Accionistas',
                    icon: 'perm_identity',
                    route: 'shareholder'
                },
                {
                    title: 'Portal Clientes',
                    icon: 'face',
                    route: 'prospect'
                }
            ]
        },
        {
            icon: 'message',
            route: ''
        },
        {
            icon: 'search',
            route: ''
        }
    ]

    onMenuSelection(navItem) {
        if (navItem.navItems) {
            this.isVisible = !this.isVisible;
        } else {

        }
    }
}
