let timeArr = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00']

document.getElementById('currentDay').innerHTML = moment().format('dddd Do MMMM, YYYY')

// To cycle through the time array
for (let i = 0; i < timeArr.length; i++) {
    // console.log(timeArr[i])
    let hourSlot = document.createElement('div')
    hourSlot.innerHTML = `
        <tr>
            <th scope="row">${timeArr[i]}</th>
            <td colspan = "3">
            <div class="input-group mb-3 input-group-lg">
                <input type="text" id="input9" class="form-control" placeholder="" 
                aria-describedby="button-addon2">
                <div class="input-group-append">
                <button class="btn btn-outline-secondary btn-info" type="saveBtn" id="button-addon2">Save</button>
                </div>
            </div>
            </td>
        </tr>
    `
    document.getElementById('hourRow').append(hourSlot)
}