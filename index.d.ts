declare module 'frametalk' {
    function send(otherWindow: Window, name: string, data: any, targetOrigin?: string): void
    function on(message: string, callback: (event: MessageEvent, data: any) => void)
    function request<T>(otherWindow: Window, name: string, data: any, targetOrigin?: string): Promise<T>
    function replyOn(name: string, callback: (event: MessageEvent) => void | Promise<any>, otherWindow?: Window)
}