'use client'

import { useState } from 'react'

type Result = { close: () => void; open: () => void; isOpen: string | undefined }

export const useModal = (): Result => {
  const [openModal, setOpenModal] = useState<string | undefined>()

  const closeHandler = () => setOpenModal(undefined)
  const openHandler = () => setOpenModal('default')

  return { close: closeHandler, open: openHandler, isOpen: openModal }
}
