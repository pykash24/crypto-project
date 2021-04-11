import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  

  cryptocurrency = ["Bitcoin", "Ethereum", "Binance","Wrapped Bitcoin", "Dogecoin",  "BitTorrent","Bitcoin Cash",
    // "Litecoin","Filecoin",  "USD Coin", "TRON", "THETA", "Coin",  "XRP", "Tether", "Cardano", "plkadot",
      "Litecoin","Filecoin",  "USD Coin", "TRON", "THETA", 
    //  "Stellar",  "Chainlink", 
    //  "Filecoin", "Klaytn"
    ]
}
