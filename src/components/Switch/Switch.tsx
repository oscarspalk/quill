import React, { useState } from "react";

export interface SwitchProps {
    onChange: (value: boolean) => void;
    initialValue?: boolean;
}

const Switch = (props: SwitchProps) => {
    const [value, setValue] = React.useState(props.initialValue || false)
    return <div onClick={() => setValue(!value)}>{value}</div>
}

export default Switch;