import os
import sys
import json
import requests

assert len(sys.argv) >= 2, "Need api key in cmd arguments"

key = sys.argv[1]

ENTRY = "https://api.curseforge.com"
FILE_INFO = "{entry}/v1/mods/{project_id}/files/{file_id}"

MODS_FOLDER = "./mods"

headers = {
  'Accept': 'application/json',
  'x-api-key': key
}

print(headers)

class DownloadInfo:
    def __init__(self, url, file_name):
        self.url = url
        self.file_name = file_name

def generate_download_url(file_id, file_name):
    first_half = str(file_id)[:4]
    last_half = str(file_id)[4:].replace("0", "")

    return f"https://mediafilez.forgecdn.net/files/{first_half}/{last_half}/{file_name}"

def get_download_url(project_id, file_id):
    r = requests.get(FILE_INFO.format(entry=ENTRY, project_id=project_id, file_id=file_id), headers = headers)
    mdata = r.json()["data"]

    download_url = mdata["downloadUrl"]
    file_name = mdata["fileName"]
    if download_url is None:
        download_url = generate_download_url(file_id, file_name)

    return DownloadInfo(download_url, file_name)

def download_mod(file):
        project_id = file["projectID"]
        file_id = file["fileID"]

        download_info: DownloadInfo = get_download_url(project_id, file_id)

        to = os.path.join(MODS_FOLDER, download_info.file_name)
        download_file(download_info.url, to)

def download_file(url, to):
    download_dir = os.path.dirname(to)
    if not os.path.exists(download_dir):
        os.makedirs(os.path.dirname(to))
    
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(to, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    
    print(to, "downloaded")

if __name__ == "__main__":
    with open("manifest.json", "r") as f:
        data = json.load(f)

        for file in data["files"]:
            download_mod(file)