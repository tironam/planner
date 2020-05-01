let timeArr = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00']

// To cycle through the time array
for (let i = 0; i < timeArr.length; i++) {
    // console.log(timeArr[i])
    let hourSlot = $('<div>')
    hourSlot.html = `
        <tr>
            <th scope="row">${timeArr[i]}</th>
            <td colspan = "3">
            <div class="input-group mb-3 input-group-lg">
                <input type="text" id="input9" class="form-control" placeholder="" 
                aria-describedby="button-addon2">
                <div class="input-group-append">
                <button class="btn btn-outline-secondary btn-info" type="saveBtn" id="button-addon2">Button</button>
                </div>
            </div>
            </td>
        </tr>
    `
    $('#hourRow').append()
}