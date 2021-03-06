import { DeviceConfiguration, DeviceInputData, DeviceDescriptionMap } from './device'

// events from server
export namespace ServerEvents {
  export type DevicesUpdated = {
    devices: DeviceDescriptionMap
  }

  export type EventRate = {
    deviceId: string
    eventRate: number
  }

  export type InputEvent = {
    deviceId: string
    inputData: DeviceInputData
  }
}

// from client
export namespace ClientEvents {
  export const enum Names {
  }

  export type UpdateConfiguration = {
    deviceId: string
    configuration: Partial<DeviceConfiguration>
    store: boolean
  }

  export type SubscribeToDevice = {
    deviceId: string
  }

  export type UnsubscribeFromDevice = {
    deviceId: string
  }

  export type SaveConfiguration = {
    deviceId: string
  }

  export type UpdateSensorThreshold = {
    deviceId: string
    sensorIndex: number,
    newThreshold: number
    store: boolean
  }

  export type Calibrate = {
    deviceId: string,
    calibrationBuffer: number
  }
} 
