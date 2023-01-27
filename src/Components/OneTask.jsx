import React from "react";
import '../App.css'
import Tag from "./Tag";
export default function OneTask(){
    return <>
        <div className="one-task">
            <div className="content">
                <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices ex nunc, ac</div>
                <div className="description" style={{marginBottom:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia tellus nibh, sed ultrices turpis commodo non. Sed vel dui porta, posuere tortor nec, malesuada eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sodales mauris urna, eget aliquet risus facilisis in. Donec tempor, dolor vel volutpat fringilla, elit nunc egestas ante, sed ullamcorper nunc tortor consequat nunc. Quisque scelerisque pellentesque lacinia. Integer venenatis condimentum cursus. Duis at mauris tortor. Pellentesque et enim a elit iaculis sodales at sit amet lacus. Cras vel lacus ipsum. Donec luctus quam in vestibulum maximus. Sed fermentum vel neque a tristique. Curabitur quis justo placerat, hendrerit tellus nec, dignissim odio. Vivamus ullamcorper accumsan ornare. In tristique ornare mauris sed gravida. Mauris quis tellus interdum, laoreet ipsum iaculis, rhoncus ligula. Maecenas vitae dapibus lacus. Phasellus vulputate nisi eu massa eleifend consequat ligula.</div>
                <div className="date">Due on 12/12/2023</div>
                <div className="status">Status: WORKING</div>
                <div className="status-space" style={{marginBottom:"5px"}}><Tag/> <Tag/> <Tag/> <Tag/> <Tag/></div>
            </div>
            <div className="edit-btn">
                <button title="Mark as done" className="edit">&#10004;</button>
                <button title="Update Task" className="edit">&#10000;</button>
                <button title="Delete Task" className="edit">&#x2716;</button>
            </div>
        </div>
    </>
}