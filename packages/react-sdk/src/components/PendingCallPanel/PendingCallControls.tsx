import { CallingState } from '@stream-io/video-client';
import { AcceptCallButton, CancelCallButton } from '../CallControls';
import { useCall, useCallCallingState } from '@stream-io/video-react-bindings';

export const PendingCallControls = () => {
  const call = useCall();
  const callCallingState = useCallCallingState();

  if (!call) return null;

  const buttonsDisabled = callCallingState !== CallingState.RINGING;
  return (
    <div className="str-video__pending-call-controls">
      {call.isCreatedByMe ? (
        <CancelCallButton call={call} disabled={buttonsDisabled} />
      ) : (
        <>
          <AcceptCallButton call={call} disabled={buttonsDisabled} />
          <CancelCallButton
            onClick={() => call.leave({ reject: true })}
            disabled={buttonsDisabled}
          />
        </>
      )}
    </div>
  );
};
