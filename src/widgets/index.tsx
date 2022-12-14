import {
  AppEvents,
  declareIndexPlugin,
  QueueInteractionScore,
  ReactRNPlugin,
  WidgetLocation,
} from '@remnote/plugin-sdk';
import '../style.css';
import '../App.css';

async function onActivate(plugin: ReactRNPlugin) {
  // Register settings
  // await plugin.settings.registerStringSetting({
  //   id: 'name',
  //   title: 'What is your Name?',
  //   defaultValue: 'Bob',
  // });

  // await plugin.settings.registerBooleanSetting({
  //   id: 'pizza',
  //   title: 'Do you like pizza?',
  //   defaultValue: true,
  // });

  // await plugin.settings.registerNumberSetting({
  //   id: 'favorite-number',
  //   title: 'What is your favorite number?',
  //   defaultValue: 42,
  // });

  // // A command that inserts text into the editor if focused.
  // await plugin.app.registerCommand({
  //   id: 'editor-command',
  //   name: 'Editor Command',
  //   action: async () => {
  //     plugin.editor.insertPlainText('Hello World!');
  //   },
  // });

  // // Show a toast notification to the user.
  // await plugin.app.toast("I'm a toast!");

  // // Register a sidebar widget.
  // await plugin.app.registerWidget('sample_widget', WidgetLocation.RightSidebar, {
  //   dimensions: { height: 'auto', width: '100%' },
  // });

  // not example stuff here

  await plugin.app.registerWidget('countDown', WidgetLocation.FloatingWidget, {
    dimensions: { height: 300, width: 'auto' },
  });

  plugin.event.addListener(AppEvents.QueueCompleteCard, undefined, async (data) => {
    if ((data.scroe as QueueInteractionScore) === QueueInteractionScore.AGAIN) {
      console.log("11511 You've got it wrong!");
      setTimeout(async () => {
        await plugin.window.openFloatingWidget(
          'countDown',
          { top: -180 },
          'rn-queue__show-answer-btn'
        );
      }, 25);
    }
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
