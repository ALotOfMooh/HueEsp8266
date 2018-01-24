import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { LightsPage } from '../lights/lights';
import { ScenesPage } from '../scenes/scenes';
import { RoutinesPage } from '../routines/routines';
import { GroupsPage } from '../groups/groups';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  settingsTab = SettingsPage;
  lightsTab= LightsPage;
  scenesTab = ScenesPage;
  routinesTab = RoutinesPage;
  groupsTab = GroupsPage
  constructor() {

  }
}
