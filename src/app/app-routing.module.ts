import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { FuelSystemComponent } from './newMetroCity/common-layout/fuel-system/fuel-system.component';
import { DashboardComponent} from './newMetroCity/dashboard/dashboard.component';

import { IssuanceComponent } from './newMetroCity/issuance/issuance.component';
import { SendDemandComponent } from './newMetroCity/issuance-child-components/send-demand/send-demand.component';
import { DemandStatusComponent} from './newMetroCity/issuance-child-components/demand-status/demand-status.component';

import {ApprovalComponent } from './newMetroCity/approval/approval.component';
import { PendingRequestsComponent } from './newMetroCity/approval-child-components/pending-requests/pending-requests.component';
import { PreviousRequestsComponent } from './newMetroCity/approval-child-components/previous-requests/previous-requests.component';

import { InventoryHistoryComponent} from './newMetroCity/inventory-history/inventory-history.component';
import { InventoryNewPurchaseComponent } from './newMetroCity/inventory-new-purchase/inventory-new-purchase.component';
import { InventoryStoreTransferComponent } from './newMetroCity/inventory-store-transfer/inventory-store-transfer.component';
import { InventoryStoresComponent } from './newMetroCity/inventory-stores/inventory-stores.component';
import { InventorySuppliersComponent } from './newMetroCity/inventory-suppliers/inventory-suppliers.component';
import { InventoryComponent } from './newMetroCity/inventory/inventory.component';

import { VehicleComponent } from './newMetroCity/vehicle/vehicle.component';

import { ReportsComponent} from './newMetroCity/reports/reports.component';
import { ReportsDetailsComponent } from './newMetroCity/reports-child-components/reports-details/reports-details.component';

import { SettingsAddUserComponent } from './newMetroCity/settings-add-user/settings-add-user.component';
import { SettingsModuleAccessComponent } from './newMetroCity/settings-module-access/settings-module-access.component';
import { SettingsPrinterComponent } from './newMetroCity/settings-printer/settings-printer.component';
import { SettingsInvoicePrintingComponent } from './newMetroCity/settings-invoice-printing/settings-invoice-printing.component';
import { SettingsUniversalSettingComponent } from './newMetroCity/settings-universal-setting/settings-universal-setting.component';
import { SettingsUserSettingComponent } from './newMetroCity/settings-user-setting/settings-user-setting.component';
import { SettingsComponent } from './newMetroCity/settings/settings.component';






const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {path:'fuel',component:FuelSystemComponent,
  children:[
    {path: 'dashboard', component: DashboardComponent, outlet:'metroCity'},
    
    {path:'issuance', component:IssuanceComponent,outlet:'metroCity'}, 
    {path: 'send-demand', component:SendDemandComponent,outlet:'metroCity'},
    {path: 'demand-details', component:DemandStatusComponent,outlet:'metroCity'},

    {path: 'approval', component: ApprovalComponent, outlet:'metroCity'},
    {path: 'pending-requests', component: PendingRequestsComponent, outlet:'metroCity'},
    {path: 'previous-requests', component: PreviousRequestsComponent, outlet:'metroCity'},

    {path: 'vehicle', component: VehicleComponent, outlet:'metroCity'},

    {path: 'inventory', component: InventoryComponent, outlet:'metroCity'},
    {path: 'inventory-new-purchase', component: InventoryNewPurchaseComponent, outlet:'metroCity'},
    {path: 'inventory-history', component: InventoryHistoryComponent, outlet:'metroCity'},
    {path: 'inventory-store-transfer', component: InventoryStoreTransferComponent, outlet:'metroCity'},
    {path: 'inventory-stores', component: InventoryStoresComponent, outlet:'metroCity'},
    {path: 'inventory-suppliers', component: InventorySuppliersComponent, outlet:'metroCity'},

    {path: 'reports', component: ReportsComponent, outlet:'metroCity'},
    {path: 'report-details', component: ReportsDetailsComponent, outlet:'metroCity'},

    {path: 'settings', component: SettingsComponent, outlet:'metroCity'},
    {path: 'settings-add-user', component: SettingsAddUserComponent, outlet:'metroCity'},
    {path: 'user-setting', component: SettingsUserSettingComponent, outlet:'metroCity'},
    {path: 'settings-module-access', component: SettingsModuleAccessComponent, outlet:'metroCity'},
    {path: 'universal-setting', component: SettingsUniversalSettingComponent, outlet:'metroCity'},
    {path: 'settings-printer', component: SettingsPrinterComponent, outlet:'metroCity'},
    {path: 'settings-invoice-printing', component: SettingsInvoicePrintingComponent, outlet:'metroCity'},


  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
