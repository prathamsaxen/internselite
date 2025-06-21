import 'package:flutter/material.dart';

class TaskTile extends StatelessWidget{
    final String taskTitle;
    final bool isChecked;
    final Function(bool?) checkboxCallback;
    final Function() deleteCallback;

    TaskTile({
        required this.taskTitle,
        required this.isChecked,
        required this.checkboxCallback,
        required this.deleteCallback,
    });

    @override

    Widget build(BuildContext context)
{
    return ListTile(
        title:Text(
            taskTitle,
            style:TextStyle(
                decoration:isChecked?TextDecoration.lineThrough : null,
            ),
        ),
        leading:Checkbox(
            value:isChecked,
            onChanged:checkboxCallback,
        ),
        trailing:IconButton(
            icon:Icon(Icons.delete),
            onPressed:deleteCallback,
        ),
    );
}}