import {trigger, transition, style, query, group, animateChild,animate,keyframes} from 
'@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> option', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 100,
          left: 0,
          width: '100%',
          opacity: 0
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('700ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('700ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('700ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('700ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);