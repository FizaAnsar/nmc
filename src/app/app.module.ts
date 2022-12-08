import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './newMetroCity/common-layout/header/header.component';
import { SidebarComponent } from './newMetroCity/common-layout/sidebar/sidebar.component';
import { FuelSystemComponent } from './newMetroCity/common-layout/fuel-system/fuel-system.component';

import {DashboardComponent } from './newMetroCity/dashboard/dashboard.component';

import { IssuanceComponent } from './newMetroCity/issuance/issuance.component';
import { SendDemandComponent } from './newMetroCity/issuance-child-components/send-demand/send-demand.component';
import { DemandStatusComponent } from './newMetroCity/issuance-child-components/demand-status/demand-status.component';
import { ApprovalComponent } from './newMetroCity/approval/approval.component';
import { PendingRequestsComponent } from './newMetroCity/approval-child-components/pending-requests/pending-requests.component';
import { PreviousRequestsComponent } from './newMetroCity/approval-child-components/previous-requests/previous-requests.component';

import { InventoryComponent } from './newMetroCity/inventory/inventory.component';
import { InventoryNewPurchaseComponent } from './newMetroCity/inventory-new-purchase/inventory-new-purchase.component';
import { InventoryHistoryComponent } from './newMetroCity/inventory-history/inventory-history.component';
import { InventoryStoreTransferComponent } from './newMetroCity/inventory-store-transfer/inventory-store-transfer.component';
import { InventoryStoresComponent } from './newMetroCity/inventory-stores/inventory-stores.component';
import { InventorySuppliersComponent } from './newMetroCity/inventory-suppliers/inventory-suppliers.component';

import { VehicleComponent } from './newMetroCity/vehicle/vehicle.component';

import { ReportsComponent } from './newMetroCity/reports/reports.component';
import { ReportsDetailsComponent } from './newMetroCity/reports-child-components/reports-details/reports-details.component';

import { SettingsComponent } from './newMetroCity/settings/settings.component';
import { SettingsAddUserComponent } from './newMetroCity/settings-add-user/settings-add-user.component';
import { SettingsUserSettingComponent } from './newMetroCity/settings-user-setting/settings-user-setting.component';
import { SettingsModuleAccessComponent } from './newMetroCity/settings-module-access/settings-module-access.component';
import { SettingsUniversalSettingComponent } from './newMetroCity/settings-universal-setting/settings-universal-setting.component';
import { SettingsPrinterComponent } from './newMetroCity/settings-printer/settings-printer.component';
import { SettingsInvoicePrintingComponent } from './newMetroCity/settings-invoice-printing/settings-invoice-printing.component';
// import { NgxPrintElementModule } from 'ngx-print-element';

import { NgChartsModule,NgChartsConfiguration } from 'ng2-charts';
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete'

import {NgConfirmModule} from 'ng-confirm-box'







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FuelSystemComponent,
    DashboardComponent,
    IssuanceComponent,
    SendDemandComponent,
    DemandStatusComponent,
    ApprovalComponent,
    PreviousRequestsComponent,
    PendingRequestsComponent,
    InventoryComponent,
    VehicleComponent,
    ReportsComponent,
    ReportsDetailsComponent,
    SettingsComponent,
    SettingsAddUserComponent,
    SettingsUserSettingComponent,
    SettingsModuleAccessComponent,
    SettingsUniversalSettingComponent,
    SettingsPrinterComponent,
    InventoryNewPurchaseComponent,
    InventoryHistoryComponent,
    InventoryStoreTransferComponent,
    InventoryStoresComponent,
    InventorySuppliersComponent,
    SettingsInvoicePrintingComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    NgbModule,
    NgChartsModule,
    MatInputModule,
    MatAutocompleteModule,
    NgConfirmModule,
    // NgxPrintElementModule,

   
  ],
  providers: [{provide:NgChartsConfiguration,useValue:{generateColors:false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
