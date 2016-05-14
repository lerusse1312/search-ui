/// <reference path='../Base.ts' />

module Coveo {
  export interface SearchAlertEventArgs {
    subscription: ISubscription;
    dom?: HTMLElement;
  }
  
  export interface SearchAlertsFailEventArgs {
    dom?: HTMLElement;
  }

  export class SearchAlertEvents {
    public static searchAlertCreated = 'searchAlertCreated';
    public static searchAlertDeleted = 'searchAlertDeleted';
    public static SearchAlertsFail = 'SearchAlertsFail';
  }
}