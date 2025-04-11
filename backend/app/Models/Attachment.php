<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    //
    protected $fillable = [
    'title',
    'original_name',
    'storage_path',
    'mime_type',
    'size',
    "item_id"
];

public function item()
{
    return $this->belongsTo(Item::class);
}

}