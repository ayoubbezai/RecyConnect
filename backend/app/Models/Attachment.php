<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    //
    protected $fillable = [
    'folder_id',
    'title',
    'original_name',
    'storage_path',
    'mime_type',
    'size'
];

public function folder()
{
    return $this->belongsTo(Item::class);
}

}