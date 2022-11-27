import { renderWidget } from '@remnote/plugin-sdk';

function CountDown() {
  console.log('11511 rendering widget');

  return (
    <div className="grid gap-1 p-1 border-solid rounded-md cursor-pointer rn-clr-background-primary rn-clr-content-primary">
      <div>{'Try harder >:('}</div>
    </div>
  );
}

renderWidget(CountDown);
