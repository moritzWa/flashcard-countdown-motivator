import { renderWidget } from '@remnote/plugin-sdk';

function Popup() {
  return (
    <div className="p-1 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive">
      <div>{'Try harder >:('}</div>
    </div>
  );
}

renderWidget(Popup);
