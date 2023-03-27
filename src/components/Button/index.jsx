import * as Dialog from "@radix-ui/react-dialog"
import "./styles.css"
import { RxPlus, RxExit, RxCross1 } from 'react-icons/rx'
import { FaPen } from 'react-icons/fa'
export function Button(){
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild >
        <button className="custom-icon">
          <RxPlus />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay"/> 

        <Dialog.Content className="dialog-content">
          <Dialog.Title className="dialog-title">
            Nova tarefa
            <FaPen size={20} />
          </Dialog.Title>
          <Dialog.Close className="dialog-close">
            <RxCross1 size={20} />
          </Dialog.Close>

        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  )
}