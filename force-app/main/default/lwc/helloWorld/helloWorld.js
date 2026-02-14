import { LightningElement, api } from 'lwc';

/**
 * HelloWorld
 * Simple LWC to display static text on Account record page.
 * Targets: lightning__RecordPage
 */
export default class HelloWorld extends LightningElement {
  // Record Id available when placed on a record page
  @api recordId;
}
