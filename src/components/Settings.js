import React from 'react'
import { Accordion, Button, Dropdown, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { BanIcon, ThreeDots } from '../assets/images/icons';
import { updateContainer } from '../redux/features/actions/settings.actions';
import {
    setPosition,
    addChild,
    removeChild,
    resetAll,
    setChild,
} from '../redux/features/reducers/settings.slice';
import Slider from 'rc-slider';

const Settings = () => {

    const displayOptions = [
        { value: 'inline', label: "inline" },
        { value: 'inline-block', label: "inline-block" },
        { value: 'inline-flex', label: "inline-flex" },
        { value: 'block', label: "block" },
        { value: 'flex', label: "flex" },
    ];

    const containerAlignItems = [
        { value: 'center', label: "center" },
        { value: 'flex-start', label: "flex-start" },
        { value: 'flex-end', label: "flex-end" },
        { value: 'stretch', label: "stretch" },
    ];

    const overflowOptions = [
        { value: 'visible', label: "visible" },
        { value: 'hidden', label: "hidden" },
        { value: 'clip', label: "clip" },
        { value: 'scroll', label: "scroll" },
        { value: 'auto', label: "auto" },
    ]

    const containerJustifyContent = [
        { value: "center", label: "center" },
        { value: "space-between", label: "space-between" },
        { value: "space-around", label: "space-around" },
        { value: "space-evenly", label: "space-evenly" },
        { value: "flex-end", label: "flex-end" },
        { value: "flex-start", label: "flex-start" },
    ];


    const containerAlignContent = [
        { value: "center", label: "center" },
        { value: "space-between", label: "space-between" },
        { value: "space-around", label: "space-around" },
        { value: "space-evenly", label: "space-evenly" },
        { value: "flex-end", label: "flex-end" },
        { value: "flex-start", label: "flex-start" },
    ];
    const containerFlexDirection = [
        { value: "row", label: "row" },
        { value: "row-reverse", label: "row-reverse" },
        { value: "column", label: "column" },
        { value: "column-reverse", label: "column-reverse" },
        { value: "row", label: "row" },
    ];


    const settingsPositionOptions = [
        { value: 'end', label: 'Right' },
        { value: 'start', label: "Left" },
    ];


    const childProperties = {
        width: 0,
        height: 0,
        display: 'block',
        overflow: 'visible',
        flexBasis: 0,
        flexShrink: 1,
        flexGrow: 0,
    }

    const dispatch = useDispatch();
    const { position, container, childrens } = useSelector(state => state.settings);
    return (
        <div className={`settings_bar ${position}-0`}>
            <div className="settings_bar_header">
                <h2>Settings</h2>
                <button title='Reset all' className='ms-auto' onClick={() => dispatch(resetAll())}>
                    <BanIcon />
                </button>
                <Dropdown className='position_dropdown'>
                    <Dropdown.Toggle id="dropdown-basic">
                        <ThreeDots />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            settingsPositionOptions.map(item => (
                                <Dropdown.Item active={position === item.value} href="" onClick={() => dispatch(setPosition(item.value))} key={item.value}>{item.label}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="settings_bar_body">
                <div className="settings_bar_body_box">
                    <h5 className='mb-3'>
                        Container Settings
                    </h5>
                    <Form.Group controlId='display'>
                        <Form.Label>Display</Form.Label>
                        <Select
                            value={{ value: container?.display, label: container?.display }}
                            className='selector'
                            classNamePrefix='selector'
                            label="display"
                            options={displayOptions}
                            onChange={option => dispatch(updateContainer('display', option.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId='align-items'>
                        <Form.Label>Align Items</Form.Label>
                        <Select
                            value={{ value: container?.alignItems, label: container?.alignItems }}
                            className='selector'
                            classNamePrefix='selector'
                            options={containerAlignItems}
                            onChange={option => dispatch(updateContainer('alignItems', option.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId='align-items'>
                        <Form.Label>Justify Content</Form.Label>
                        <Select
                            value={{ value: container?.justifyContent, label: container?.justifyContent }}
                            className='selector'
                            classNamePrefix='selector'
                            options={containerJustifyContent}
                            onChange={option => dispatch(updateContainer('justifyContent', option.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId='align-items'>
                        <Form.Label>overflow</Form.Label>
                        <Select
                            value={{ value: container.overflow, label: container.overflow }}
                            className='selector'
                            classNamePrefix='selector'
                            options={overflowOptions}
                            onChange={option => dispatch(updateContainer('overflow', option.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId='align-items'>
                        <Form.Label>Flex Direction</Form.Label>
                        <Select
                            value={{ value: container?.flexDirection, label: container?.flexDirection }}
                            className='selector'
                            classNamePrefix='selector'
                            options={containerFlexDirection}
                            onChange={option => dispatch(updateContainer('flexDirection', option.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId='align-items'>
                        <Form.Label>Align Content</Form.Label>
                        <Select
                            value={{ value: container?.alignContent, label: container?.alignContent }}
                            className='selector'
                            classNamePrefix='selector'
                            options={containerAlignContent}
                            onChange={option => dispatch(updateContainer('alignContent', option.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId='width'>
                        <Form.Label>Width</Form.Label>
                        <div className="d-flex align-items-center">
                            <Slider
                                onChange={value => dispatch(updateContainer('width', value))}
                                value={container.width}
                                min={0}
                                max={900}
                            />
                            <p className='ps-5'>{container.width}px</p>
                        </div>
                    </Form.Group>

                    <Form.Group controlId='width'>
                        <Form.Label>Height</Form.Label>
                        <div className="d-flex align-items-center">
                            <Slider
                                onChange={value => dispatch(updateContainer('height', value))}
                                value={container.height}
                                min={0}
                                max={900}
                            />
                            <p className='ps-5'>{container.height || ''}{container.height <= 0 ? 'auto' : 'px'}</p>
                        </div>
                    </Form.Group>

                    <Form.Group className='py-3'>
                        <Form.Check
                            type={'checkbox'}
                            id={`flex-wrap`}
                            label={`Flex wrap`}
                            onChange={value => dispatch(updateContainer('flexWrap', value.target.checked ? 'wrap' : 'nowrap'))}
                            checked={container.flexWrap === 'wrap'}
                        />
                    </Form.Group>
                </div>
                <hr />
                <div className="settings_bar_body_box">
                    <h5 className="mb-3">Child Settings</h5>
                    <div className='d-flex'>
                        {
                            childrens.length <= 4 &&
                            <Button
                                className='w-50 me-2'
                                onClick={() => dispatch(addChild(childProperties))}>
                                Add Child
                            </Button>
                        }
                        {
                            childrens.length !== 0 &&
                            <Button
                                className='ms-auto w-50'
                                onClick={() => dispatch(removeChild())}
                            >
                                Remove Child
                            </Button>
                        }
                    </div>
                </div>
                {
                    childrens.length > 0 &&
                    <div className="settings_bar_inner mt-3">
                        <div className="settings_bar_body_box">
                            <Accordion defaultActiveKey="0">
                                {
                                    childrens.map(item => (
                                        <Accordion.Item key={item.id} eventKey={item.id}>
                                            <Accordion.Header>
                                                {item.id + 1} Child
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Form.Group controlId={`${item.id}width`}>
                                                    <Form.Label>width</Form.Label>
                                                    <Slider
                                                        max={container.width}
                                                        min={0}
                                                        onChange={value => dispatch(setChild({ id: item.id, property: 'width', value }))}
                                                        value={childrens[item.id].width}
                                                    />
                                                    {childrens[item.id].width ? `${childrens[item.id].width}px` : 'auto'}
                                                </Form.Group>
                                                <Form.Group controlId={`${item.id}flexBasis`}>
                                                    <Form.Label>flex-basis</Form.Label>
                                                    <Slider
                                                        max={container.width}
                                                        min={0}
                                                        onChange={value => dispatch(setChild({ id: item.id, property: 'flexBasis', value }))}
                                                        value={childrens[item.id].flexBasis}
                                                    />
                                                    {childrens[item.id].flexBasis ? `${childrens[item.id].flexBasis}px` : 'auto'}
                                                </Form.Group>
                                                <Form.Group controlId={`${item.id}flexGrow`}>
                                                    <Form.Label>flex-grow</Form.Label>
                                                    <Slider
                                                        max={10}
                                                        step={1}
                                                        min={0}
                                                        onChange={value => dispatch(setChild({ id: item.id, property: 'flexGrow', value }))}
                                                        value={childrens[item.id].flexGrow}
                                                    />
                                                    {childrens[item.id].flexGrow}
                                                </Form.Group>
                                                <Form.Group controlId={`${item.id}flexShrink`}>
                                                    <Form.Label>flex-shrink</Form.Label>
                                                    <Slider
                                                        max={10}
                                                        step={1}
                                                        min={0}
                                                        onChange={value => dispatch(setChild({ id: item.id, property: 'flexShrink', value }))}
                                                        value={childrens[item.id].flexShrink}
                                                    />
                                                    {childrens[item.id].flexShrink}
                                                </Form.Group>
                                                <Form.Group className='mt-3' controlId={`${item.id}height`}>
                                                    <Form.Label>height</Form.Label>
                                                    <Slider
                                                        max={container.height}
                                                        min={0}
                                                        onChange={value => dispatch(setChild({ id: item.id, property: 'height', value }))}
                                                        value={childrens[item.id].height}
                                                    />
                                                    {childrens[item.id].height ? `${childrens[item.id].height}px` : 'auto'}
                                                </Form.Group>
                                                <Form.Group className='mt-3' controlId={`${item.id}display`}>
                                                    <Form.Label>Display</Form.Label>
                                                    <Select
                                                        options={displayOptions}
                                                        onChange={option => dispatch(setChild({ id: item.id, property: 'display', value: option.value }))}
                                                        value={{ value: childrens[item.id].display, label: childrens[item.id].display }}
                                                    />
                                                </Form.Group>
                                                <Form.Group className='mt-3' controlId={`${item.id}overflow`}>
                                                    <Form.Label>overflow</Form.Label>
                                                    <Select
                                                        options={overflowOptions}
                                                        onChange={option => dispatch(setChild({ id: item.id, property: 'overflow', value: option.value }))}
                                                        value={{ value: childrens[item.id].overflow, label: childrens[item.id].overflow }}
                                                    />
                                                </Form.Group>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Settings
